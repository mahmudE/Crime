import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.page.html',
  styleUrls: ['./awareness.page.scss'],
})
export class AwarenessPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    // display alert on page load
    this.presentAlert();
  }


  // alert
  async presentAlert() {
    const alert = await this.alertController.create({
      // header: 'Alert Header',
      message: 'This page provides list of Crimes and Cyber Frauds, the techniques used by attackers and how to prevent them.',
      buttons: ['Proceed']
    });

    await alert.present();
  }



// tips
   cyberFraudTechniques = [
    {
      sn: 'first',
      technique: 'Phishing Emails',
      description: 'Scammers send emails pretending to be from legitimate sources to steal personal information or spread malware.',
      prevention: 'Verify sender email addresses, don\'t click on suspicious links, and don\'t provide sensitive information via email.'
    },
    {
      sn: 'second',
      technique: 'Spoofed Websites',
      description: 'Fraudsters create fake websites that mimic legitimate ones to steal login credentials or financial details.',
      prevention: 'Always check the website URL for authenticity, ensure it\'s using HTTPS, and don\'t enter sensitive data on unsecured sites.'
    },
    {
      sn: 'third',
      technique: 'Identity Theft',
      description: 'Criminals steal personal information to open fraudulent accounts or conduct financial transactions in the victim\'s name.',
      prevention: 'Use strong, unique passwords; enable two-factor authentication; and monitor your accounts for unusual activity.'
    },
    {
      sn: 'fourth',
      technique: 'Tech Support Scams',
      description: 'Attackers pose as tech support agents, claiming there\'s a problem with your device, and ask for remote access or payment.',
      prevention: 'Only trust known support channels, don\'t grant remote access to strangers, and never provide financial information over the phone.'
    },
    {
      sn: 'fifth',
      technique: 'Ransomware',
      description: 'Malware encrypts a user\'s files, and attackers demand a ransom to provide the decryption key.',
      prevention: 'Regularly back up important files, keep software updated, and avoid downloading attachments from unknown sources.'
    },
    {
      sn: 'sixth',
      technique: 'Social Engineering',
      description: 'Attackers manipulate individuals into divulging confidential information, often by pretending to be a trusted contact.',
      prevention: 'Be cautious of unsolicited requests for information, verify requests via other means, and educate yourself about common tactics.'
    },
    {
      sn: 'seventh',
      technique: 'Fake Apps',
      description: 'Fraudsters create malicious apps that mimic popular services, infecting devices with malware.',
      prevention: 'Download apps only from official app stores, read reviews, and check permissions before installing.'
    },
    {
      sn: 'eighth',
      technique: 'Investment Scams',
      description: 'Criminals offer fake investment opportunities promising high returns, tricking victims into giving away money.',
      prevention: 'Research investments thoroughly, be wary of promises that sound too good to be true, and consult financial advisors.'
    },
    {
      sn: 'nineth',
      technique: 'Dating Scams',
      description: 'Scammers create fake online dating profiles to establish emotional connections and request money from victims.',
      prevention: 'Be cautious with personal information, don\'t send money to people you haven\'t met in person, and trust your instincts.'
    },
    {
      sn: 'tenth',
      technique: 'Unsecured Wi-Fi Risks',
      description: 'Hackers exploit unsecured Wi-Fi networks to intercept data transmitted between devices and access personal information.',
      prevention: 'Avoid public Wi-Fi for sensitive transactions, use a VPN (Virtual Private Network), and ensure your device\'s Wi-Fi is turned off when not in use.'
    },
    {
      sn: 'eleventh',
      technique: 'Payment Fraud',
      description: 'Attackers trick victims into making payments to fake accounts or websites.',
      prevention: 'Double-check payment details, avoid sharing financial information on unfamiliar sites, and use secure payment methods.'
    },
    {
      sn: 'twelvth',
      technique: 'Job Scams',
      description: 'Fraudsters offer fake job opportunities requiring upfront payments or personal information.',
      prevention: 'Research job offers, be cautious of requests for money, and don\'t provide sensitive information until you\'ve verified the legitimacy.'
    }
  ];

}
