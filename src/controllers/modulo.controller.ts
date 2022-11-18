import { moduloModel } from '../models/modulo.model'; 
import { utilServ } from '../services/util.service';

class ModuloControll{

    async getModulo(modulo:any){
        utilServ.log("Modulo Service","Intento---------->  getModulo");
        return await moduloModel.find(modulo);
    }
    async addModulo(modulo:any){
        utilServ.log("Modulo Service","Intento---------->  addModulo");

        modulo.fechaAdd=utilServ.getFecha(false);

        let aux = await new moduloModel(modulo);
        await aux.save();
        return aux;
    }
    async dellModulo(id:String):Promise<Boolean>{ 
        utilServ.log("Modulo Service","Intento---------->  dellModulo");
        if(await moduloModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updateModulo(id:String,modulo:any){
        utilServ.log("Modulo Service","Intento---------->  updateModulo");
        return moduloModel.findByIdAndUpdate(id,{$set:modulo}, {new: true})
    }

}

export const moduloCont = new ModuloControll;