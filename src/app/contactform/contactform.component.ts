import { Component, OnInit } from '@angular/core';
import {EnquiryService} from '../services/enquiry.service'

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  name:string;
  email:string;
  message:string;
  error:boolean=false;
  errorlist:string[];
  sending:boolean=false;
  imagename:string;

  constructor(private ns:EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry(){
    this.error=false;
    this.errorlist = [];
    this.imagename="../assets/images/load.gif";

    let regex=/^[a-z][a-z_\.0-9]+@[a-z]+\.[a-z]{3,5}$/;

    if (this.name== undefined || this.name.length ==0)
      this.errorlist.push("Name must be filled");

    if (this.email== undefined || this.email.length ==0)
      this.errorlist.push("Email must be filled"); 
    else if(!regex.test(this.email))
      this.errorlist.push("Email shoule be in a proper email format"); 
      
       
    if (this.message== undefined || this.message.length ==0)
      this.errorlist.push("Message must be filled");

    if(this.errorlist.length>0)
    {
      this.error=true;
    }  
    else
    {
      this.sending = true;
      let obj={name:this.name,email:this.email,message:this.message}
      this.ns.sendEnquiry(obj).subscribe(
        ()=>{
          this.imagename = "../assets/images/sent.jpg";
          setTimeout(()=>{
              this.sending= false;
              this.name= "";
              this.email ="";
              this.message ="";
            }            
            ,2000);
        },
        ()=>{
              alert('Enquiry is not sent!');
              this.sending= false;
              this.name= "";
              this.email ="";
              this.message ="";
        }
      )
    }
    
    

  }
}
