#!/usr/bin/env python3
import sys
import os
import pywhatkit as kit
from datetime import datetime, timedelta

def send_whatsapp_message(phone_number, message):
    """
    Send WhatsApp message using pywhatkit
    """
    try:
        # Get current time and add 2 minutes
        now = datetime.now()
        send_time = now + timedelta(minutes=2)
        
        # Extract hour and minute
        hour = send_time.hour
        minute = send_time.minute
        
        # Send WhatsApp message
        kit.sendwhatmsg(phone_number, message, hour, minute)
        
        print(f"Message scheduled to {phone_number} at {hour}:{minute}")
        return True
        
    except Exception as e:
        print(f"Error sending WhatsApp message: {str(e)}")
        return False

def send_bulk_messages(recipients_file):
    """
    Send bulk WhatsApp messages from a file
    """
    try:
        with open(recipients_file, 'r') as f:
            lines = f.readlines()
            
        for line in lines:
            if line.strip():
                phone, message = line.strip().split(',', 1)
                send_whatsapp_message(phone, message)
                
        return True
    except Exception as e:
        print(f"Error in bulk messaging: {str(e)}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python whatsapp_sender.py <phone_number> <message>")
        sys.exit(1)
    
    phone_number = sys.argv[1]
    message = sys.argv[2]
    
    success = send_whatsapp_message(phone_number, message)
    sys.exit(0 if success else 1)