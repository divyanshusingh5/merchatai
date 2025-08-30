import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { spawn } from 'child_process';
import path from 'path';
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// OpenAI setup
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}));

// WhatsApp client setup
const whatsappClient = new Client({
    authStrategy: new LocalAuth()
});

whatsappClient.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code above with your WhatsApp app.');
});

whatsappClient.on('ready', () => {
    console.log('WhatsApp client is ready!');
});

whatsappClient.initialize();

// API endpoint to send WhatsApp messages
app.post('/api/send-whatsapp', (req, res) => {
  const { phoneNumber, message } = req.body;
  
  // Spawn Python process to send WhatsApp message
  const pythonProcess = spawn('python3', ['whatsapp_sender.py', phoneNumber, message], {
    cwd: path.join(process.cwd(), 'scripts')
  });
  
  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python output: ${data}`);
  });
  
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
  });
  
  pythonProcess.on('close', (code) => {
    if (code === 0) {
      res.json({ success: true, message: 'WhatsApp message sent successfully' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to send WhatsApp message' });
    }
  });
});

// Example: POST /send-campaign
app.post('/send-campaign', async (req, res) => {
    const { numbers, campaignData } = req.body; // numbers: array, campaignData: object with info for GPT

    if (!Array.isArray(numbers) || !campaignData) {
        return res.status(400).json({ error: 'Missing numbers or campaignData' });
    }

    // Generate marketing message using GPT
    let message;
    try {
        const prompt = `Generate a short, engaging WhatsApp marketing message for the following campaign:\n${JSON.stringify(campaignData)}`;
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 100
        });
        message = completion.data.choices[0].message.content.trim();
    } catch (err) {
        console.error('OpenAI error:', err);
        return res.status(500).json({ error: 'Failed to generate marketing message' });
    }

    // Format numbers for WhatsApp (e.g., '1234567890@c.us')
    const formattedNumbers = numbers.map(num => {
        let cleanNum = num.replace(/\D/g, '');
        if (!cleanNum.endsWith('@c.us')) cleanNum += '@c.us';
        return cleanNum;
    });

    let results = [];
    for (const to of formattedNumbers) {
        try {
            await whatsappClient.sendMessage(to, message);
            results.push({ to, status: 'sent' });
        } catch (err) {
            results.push({ to, status: 'error', error: err.message });
        }
    }

    res.json({ results, message });
});

// API endpoint for AI-powered analytics
app.post('/api/analyze-data', async (req, res) => {
  try {
    const { transactionData, inventoryData } = req.body;
    
    // Process and analyze data
    const insights = {
      totalRevenue: transactionData.reduce((sum, t) => sum + t.Amount, 0),
      topProducts: getTopProducts(transactionData),
      customerSegments: analyzeCustomers(transactionData),
      restockAlerts: getRestockAlerts(inventoryData),
      recommendations: generateRecommendations(transactionData, inventoryData)
    };
    
    res.json(insights);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to analyze data' });
  }
});

function getTopProducts(transactions) {
  const productSales = {};
  transactions.forEach(t => {
    if (!productSales[t.ProductName]) {
      productSales[t.ProductName] = { count: 0, revenue: 0 };
    }
    productSales[t.ProductName].count++;
    productSales[t.ProductName].revenue += t.Amount;
  });
  
  return Object.entries(productSales)
    .sort(([,a], [,b]) => b.revenue - a.revenue)
    .slice(0, 10);
}

function analyzeCustomers(transactions) {
  const customers = {};
  transactions.forEach(t => {
    if (!customers[t.CustomerID]) {
      customers[t.CustomerID] = { purchases: 0, totalSpent: 0, lastPurchase: t.TransactionDate };
    }
    customers[t.CustomerID].purchases++;
    customers[t.CustomerID].totalSpent += t.Amount;
    
    if (new Date(t.TransactionDate) > new Date(customers[t.CustomerID].lastPurchase)) {
      customers[t.CustomerID].lastPurchase = t.TransactionDate;
    }
  });
  
  return customers;
}

function getRestockAlerts(inventory) {
  return inventory
    .filter(item => item.StockAvailable < 10)
    .sort((a, b) => a.StockAvailable - b.StockAvailable);
}

function generateRecommendations(transactions, inventory) {
  const recommendations = [];
  
  // Low stock recommendations
  const lowStock = inventory.filter(item => item.StockAvailable < 5);
  if (lowStock.length > 0) {
    recommendations.push(`Urgent: ${lowStock.length} products critically low on stock`);
  }
  
  // High demand products
  const productDemand = {};
  transactions.forEach(t => {
    productDemand[t.ProductName] = (productDemand[t.ProductName] || 0) + 1;
  });
  
  const highDemand = Object.entries(productDemand)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);
    
  if (highDemand.length > 0) {
    recommendations.push(`Top selling: ${highDemand[0][0]} (${highDemand[0][1]} sales)`);
  }
  
  return recommendations;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});