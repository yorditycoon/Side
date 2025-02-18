import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const privacyPolicy = () => {
  return (
    <View>
          <Text>privacyPolicy</Text>
          <ScrollView style={{padding:20,paddingBottom:200}}><Text>
          <Text>Here’s the Privacy Policy in plain text format without special characters:  
</Text>


Privacy Policy  
Effective Date: [Insert Date]  

1. Introduction  
- Welcome to [Your App Name] ("we," "our," or "us").  
- This Privacy Policy explains how we collect, use, and protect your personal information.  
- Our platform connects employers and employees and charges per hour.  
- We comply with UAE data protection laws, including the UAE Personal Data Protection Law (PDPL).  

2. Information We Collect  
We collect the following types of information:  
- Personal Information – Name, email, phone number, address, and payment details.  
- Profile Information – Resume, skills, job preferences, and work history.  
- Usage Data – Device information, IP address, login activity, and browsing behavior.  
- Payment Information – Payment processing details for transactions between employers and employees.  

3. How We Use Your Information  
We use your data to:  
- Facilitate job connections between employers and employees.  
- Process payments and track hourly charges.  
- Improve app functionality and user experience.  
- Communicate with users about job postings, payments, and security updates.  
- Prevent fraud and ensure compliance with UAE legal requirements.  

4. Sharing of Information  
Your information may be shared with:  
- Employers and Employees – To facilitate job matching and hiring.  
- Payment Processors – For secure transactions following UAE financial regulations.  
- Legal Authorities – If required by UAE law or for fraud prevention.  
- Third-Party Services – For analytics, customer support, and app improvements.  

5. Data Security  
- We implement security measures to protect your data from unauthorized access or disclosure.  
- Our security practices comply with UAE cybersecurity laws.  
- However, no method of online transmission is 100% secure.  

6. Your Rights  
Under UAE data protection laws, you have the right to:  
- Access, update, or delete your personal information.  
- Withdraw consent for data collection.  
- Request a copy of your stored data.  

7. Data Storage & Transfer  
- Your data is stored on secure servers and follows UAE data residency regulations.  
- If transferred outside the UAE, we ensure it meets equivalent data protection standards.  

8. Cookies & Tracking Technologies  
- We use cookies and tracking technologies to enhance user experience and analyze app performance.  

9. Changes to This Privacy Policy  
- We may update this policy from time to time.  
- Any changes will be posted on this page with an updated effective date.  

10. Contact Us  
For questions or concerns, contact us at:  
Email: [Your Email Address]  
Address: [Your Business Address], UAE  

---

This is in plain text with no special characters or formatting. Let me know if you need any further adjustments!
          </Text></ScrollView>
          <TouchableOpacity>
              <Text>Accept</Text>
              <Button title="hello" />
          </TouchableOpacity>
    </View>
  )
}

export default privacyPolicy