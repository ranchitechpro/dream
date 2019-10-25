export class User {
  firstName : string = "FN";
  lastName : string = "LN";
  phoneNumber:  string ;
  userType:  string = "GUSER";
  Address : {
    addressLine : string;
    city:string;
    zipcode:string;
    state :string;
    country :string;
    locationUrl :string
  }
  likes : string[];
  userId: number;
  username:string;
  emailAddress:string;
  isGoogleAuthenticated : boolean;
  isFacebookAuthenticated : boolean;
  isThumbAuthenticated  : boolean;
  lastLogin  : Date;
  nickName : string;
  dob: string;
  
  
}

