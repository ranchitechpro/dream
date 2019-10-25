import { User } from './user';
import { Product } from './product';

export class Offer {

  offerDescription :  string;
  offerStartDate :  Date;
  offerEndDate :  Date;
  offeredBy :  User;
  offerOn : Product;
  offerPercentageDiscount :number;
  offerTakenBy : User;
  offerTakenDate : Date;
  offerValid :  boolean;
  
}
