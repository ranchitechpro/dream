import { User } from './user';
import { Offer } from './offer';

export class Product {
  
  productName :  string;
  productType  :  string;
  productDescription  :string;
  productOwner :  User;
  productOffers  : Offer[]

}
