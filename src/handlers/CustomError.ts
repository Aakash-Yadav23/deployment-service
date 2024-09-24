


export class CustomError extends Error{


    public code:number;
    // private name:string;
    public details:string;
    // private code:string;

    constructor(message:string,name?:string,code?:number,details?:string){

        super(message);

        this.code=code||500;
        this.details=details||"";


        console.log("This",this.name)

    }



}