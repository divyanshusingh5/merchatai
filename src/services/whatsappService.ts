// WhatsApp messaging service using pywhatkit
export class WhatsAppService {
  private static instance: WhatsAppService;
  
  public static getInstance(): WhatsAppService {
    if (!WhatsAppService.instance) {
      WhatsAppService.instance = new WhatsAppService();
    }
    return WhatsAppService.instance;
  }

  async sendMessage(phoneNumber: string, message: string): Promise<boolean> {
    try {
      // Call Python script for WhatsApp messaging
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          message,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Failed to send WhatsApp message:', error);
      return false;
    }
  }

  async sendBulkMessages(recipients: { phoneNumber: string; message: string }[]): Promise<number> {
    let successCount = 0;
    
    for (const recipient of recipients) {
      const success = await this.sendMessage(recipient.phoneNumber, recipient.message);
      if (success) successCount++;
      
      // Add delay between messages to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    return successCount;
  }
}