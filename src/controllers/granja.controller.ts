import { granjaModel } from '../models/granja.model';
import { utilServ } from '../services/util.service';

class GranjaControll{

    async getGranja(granja:any){
        utilServ.log("granja Service","Intento---------->  getGranja");
        return await granjaModel.find(granja);
    }
    async addGranja(granja:any){
        utilServ.log("granja Service","Intento---------->  addGranja");

        granja.fechaAdd=utilServ.getFecha(false);

        let aux = await new granjaModel(granja);
        await aux.save();
        return aux;
    }
    async dellGranja(id:String):Promise<Boolean>{ 
        utilServ.log("granja Service","Intento---------->  dellGranja");
        if(await granjaModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatGranja(id:String,granja:any){
        utilServ.log("granja Service","Intento---------->  updateGranja");
        return granjaModel.findByIdAndUpdate(id,{$set:granja}, {new: true})
    }

}

export const granjaCont = new GranjaControll;