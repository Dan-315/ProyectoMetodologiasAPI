import { suscripModel } from '../models/suscrip.model';
import { utilServ } from '../services/util.service';

class SuscripControll{

    async getSuscrip(suscrip:any){
        utilServ.log("Suscrip Service","Intento---------->  getSuscrip");
        return await suscripModel.find(suscrip);
    }
    async addSuscrip(suscrip:any){
        utilServ.log("Suscrip Service","Intento---------->  addSuscrip");
        suscrip.fechaCompra=utilServ.getFecha(false)
        let aux = await new suscripModel(suscrip);
        await aux.save();
        return aux;
    }
    async dellSuscrip(id:String):Promise<Boolean>{
        utilServ.log("Suscrip Service","Intento---------->  dellSuscrip");
        if(await suscripModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updateSuscrip(id:String, suscrip:any){
        utilServ.log("Suscrip Service","Intento---------->  updateSuscrip");
        return suscripModel.findByIdAndUpdate(id,{$set:suscrip}, {new: true})
    }

}

export const suscripCont = new SuscripControll;