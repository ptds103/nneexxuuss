export class User {
    id:number = 3;
    userName: string = "";
    userPassword: string = "";
    firstName: string = "";
    lastName: string = "";
    email: string = "";

}

export class Device {
    id:number =0;
    deviceName: string ="";
    year: number =0;
    processor: String ="";
    description: String = "";

}

export class UserPlan {
    id: number =0;
    userNameU: String ="";
    planNameU: String ="";
    numOfLines:number =0;
 
}

export class PhonePlan {
    id: number = 0;
    planName: string = "";
    deviceLimit: string = "";
    pricePerLine: string= "";
    description: string = "";
}