import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, offer: boolean): number {
    if(offer){
      if(price>20000)
        return price-price*0.17;
      else if (price>15000)
        return price-price*0.14;
      else if (price>11000)
        return price-price*0.8;
      else
        return price-price*0.4;
    }
    else
      return price;
  }

}
