import { User } from "./user";
import { Offer } from './offer';

export class Review {
  reviewComment  :string;
  reviewRating  : number;
  reviewBy :  User;
  reviewOn :  Offer;
  reviewDate : Date 
}
