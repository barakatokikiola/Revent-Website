import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  

  vybecash = [
    {
      btn: ['Mobile App', 'Fintech', 'Finance'],
      btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE'],
      overview: "Vybecash is a platform that enhances users' digital payment experiences with financial accounts, transfers, bill payments, and savings services.",
      statement1: "Traditional financial transactions and banking services often prove cumbersome and time-consuming. Individuals, businesses, and organizations face numerous challenges, including slow money transfers, lack of transparency, security concerns, and limited access to modern financial tools.",
      statement2: 'Additionally, the absence of user-friendly platforms often hinders people from making informed financial decisions and optimizing their funds effectively.',
      solution: "The need of the hour is a dynamic application that addresses these pain points and revolutionizes the way users manage their finances.",
      solution2:"This concern made the client identify the need for a financial application that allows users to run digital banking and payment processing while also growing their financial portfolio through various savings plans.",
      
    }
  ];

  optiva = [
    {
      btn: ['Migration','Web app','Mobile App', 'Fintech'],
      btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE','#FEE6FA'],
      overview: "Your one-stop shop for all immigration, residency & citizenship consulting services!",
      statement1: "The traditional approach of managing migration fees using spreadsheets or paper-based forms can be tedious, error-prone and may not allow for easy tracking of payments. As a result, many businesses are seeking an efficient and automated system to manage migration fees.",
      statwment2:'',
      solution1: '',
      solution2: "With Optiva Capital's software application, employers can easily add applicants to the applicants register and generate a quote for their fees. The system also issues invoices to applicants in instalments, making it easier for them to manage their payments. Once payment is received, the system generates a receipt, which can be used for future reference."
    }
  ];

  afrexim= [
    {
      btn: ['Websites', 'Web applications', 'SAAS'],
    btnColors: ['#FEE6FA', '#E3D6F6','#FEE6FA'],
      overview: "Vendor management system (VMS) that allows employers to manage their vendors more effectively by automating the entire vendor management process.",
      statement1: "Vendor management is a crucial part of any business, but it can also be time-consuming and challenging to manage. Many employers struggle to keep track of their vendors' information, including their credentials.",
      statement2:'The traditional approach of managing vendors using spreadsheets or paper-based forms can be tedious and prone to errors.',
      solution1: "With a VMS, employers can streamline their vendor management process, reduce costs, and improve overall efficiency.",
      solution2: 'The vendor onboarding module allows employers to collect and verify vendor information, including company details, tax identification, insurance coverage, and credentials. Once the vendor is approved, employers can assign jobs to them, set deadlines, reminders, and monitor progress.'
    }
  ];

  constructor() { }

  
}
