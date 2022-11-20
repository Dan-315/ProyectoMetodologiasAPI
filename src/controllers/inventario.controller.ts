import { inventarioModel } from '../models/inventario.model';
import { utilServ } from '../services/util.service';

class InventarioControll{

    async getInventario(inventario:any){
        utilServ.log("Inventario Service","Intento---------->  getInventario");
        return await inventarioModel.find(inventario);
    }
    async addInventario(inventario:any){
        utilServ.log("Inventario Service","Intento---------->  addInventario");
        
        inventario.fechaUpdate=utilServ.getFecha(false);

        if(inventario.minimo>=0 && inventario.existencias>=0){
            let solicitud=inventario.minimo-inventario.existencias
            inventario.solicitud=solicitud>0?solicitud:0;
        }else{
            inventario.minimo=inventario.existencias=inventario.solicitud=0;
        }

        let aux = await new inventarioModel(inventario);
        await aux.save();
        return aux;
    }
    async dellInventario(id:String):Promise<Boolean>{ 
        utilServ.log("Inventario Service","Intento---------->  dellInventario");
        if(await inventarioModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updateInventario(id:String,inventario:any){
        utilServ.log("Inventario Service","Intento---------->  updateInventario");
        
        inventario.fechaUpdate=utilServ.getFecha(false);

        if(inventario.minimo && inventario.existencias){
            let solicitud=inventario.minimo-inventario.existencias
            inventario.solicitud=solicitud>0?solicitud:0;
        }

        return inventarioModel.findByIdAndUpdate(id,{$set:inventario}, {new: true})
    }

}

export const inventarioCont = new InventarioControll;