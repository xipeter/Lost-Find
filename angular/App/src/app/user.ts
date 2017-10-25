export class User{
    id:number;
    fn:string;
    ln:string;
    username:string;
    pwd:string;
    email:string;
    post:{
        title:string;
        type:number;
        status:number;
        key_time:Date;
        location:string;
        desc:string;
        publish_date:Date;

    };
    comments:{
        u_id:string;
        conent:string;
        publish_date:Date

    }
        



}