
import { utilServ } from './../src/services/util.service';
import mongoose from 'mongoose';

class ConectDB { 
    async initConect(host:string, db:string){
        return await mongoose.connect(host, {dbName:db})
    }
} 

export const apprendeDB = new ConectDB()
