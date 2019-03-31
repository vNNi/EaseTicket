import mongoose, { Promise } from 'mongoose';

class Database{
    private url: string

    constructor(url: string){
        this.url = url
    }

    public connect(): Promise<any>{
        return new Promise((resolve: any,rejetct: any)=>{
            mongoose.connect(this.url).then(function(res: any){
                return resolve(true);
            }).catch((err: any)=>{
                console.log(err);
            })
        });
    }
    public close(): any{
        return mongoose.disconnect();
    }
}

export default Database;