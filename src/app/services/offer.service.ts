import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offer : Offer;

  constructor() { }

  calculateRating(){
    
  }

  addOffer(offer : Offer){

  }

  updateOffer(offer : Offer){

  }

  disableOffer(offer : Offer){

  }

  inValidateOffer(offer : Offer){

  }
}
