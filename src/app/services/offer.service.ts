import { Injectable } from '@angular/core';

@Injectable()
export class OfferService {
  message:string;
  offerday:boolean;
  constructor() {
    this.offerday=true;
    this.message ="Flat 8 to 20% discount on all courses";
   }

}
