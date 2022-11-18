import { adminModel } from '../models/admin.model';
import { utilServ } from '../services/util.service';

class AdminControll{

    async getAdmin(admin:any){
        utilServ.log("admin Service","Intento---------->  getAdmin");
        return await adminModel.find(admin);
    }
    async addAdmin(admin:any){
        utilServ.log("admin Service","Intento---------->  addAdmin");
        
        let aux = await new adminModel(admin);
        await aux.save();
        return aux;
    }
    async dellAdmin(id:String):Promise<Boolean>{ 
        utilServ.log("admin Service","Intento---------->  dellAdmin");
        if(await adminModel.findByIdAndDelete(id)!=null){
            return true;
        }
        return false;
    }
    async updatAdmin(id:String,admin:any){
        utilServ.log("admin Service","Intento---------->  updateAdmin");
        return adminModel.findByIdAndUpdate(id,{$set:admin}, {new: true})
    }

}

export const adminCont = new AdminControll;