import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  getAllProducts(){
     
    return  [
    {
      name:"Red Mi",
      price:1250,
      image:"assets/images/mobile-1.jpeg",

    },
    {
      name:"OPPO",
      price:2250,
      image:"assets/images/mobile-2.jpeg",

    },
    {
      name:"Real Me",
      price:1246,
      image:"assets/images/mobile-3.jpeg",

    },
    {
      name:"ViVo",
      price:1436,
      image:"assets/images/mobile-4.jpeg",

    },
    {
      name:"Samsung",
      price:1552,
      image:"assets/images/mobile-5.jpeg",

    },
    {
      name:"Sony",
      price:1356,
      image:"assets/images/mobile-6.jpeg",

    },

  ]
  }
}
