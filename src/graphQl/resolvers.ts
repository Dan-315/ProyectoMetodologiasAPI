import { adminCont } from "../controllers/admin.controller";
import { inventarioCont } from "../controllers/inventario.controller";
import { granjaCont } from "../controllers/granja.controller"; 
import { moduloCont } from "../controllers/modulo.controller";

export const resolvers = {
    Query:{
        default: ()=> 'GraphQL default execution',

        getGranja: async (_:any,{granja}:any)=>{
            console.log(granja);
            
            return await granjaCont.getGranja(granja)
        },

        getAdmin: async (_:any,{admin}:any)=>{
            return await adminCont.getAdmin(admin);
        },

        getInventario: async (_:any,{inventario}:any)=>{
            return await inventarioCont.getInventario(inventario);
        },

        getModulo: async(_:any,{modulo}:any)=>{
            return await moduloCont.getModulo(modulo);
        },


    },
    Mutation:{ 
        addGranja: async (_:any, {granja}:any,) =>{
            return await granjaCont.addGranja(granja);
        },
        updatGranja: async (_:any, {id,granja}:any,) =>{
            return await granjaCont.updatGranja(id,granja);
        }, 
        dellGranja: async (_:any,{id}:any)=>{
            return await granjaCont.dellGranja(id)
        },

        addAdmin: async (_:any, {admin}:any,) =>{
            return await adminCont.addAdmin(admin);
        },
        updatAdmin: async (_:any, {id,admin}:any,) =>{
            return await adminCont.updatAdmin(id,admin);
        },
        dellAdmin: async (_:any,{id}:any)=>{
            return await adminCont.dellAdmin(id)
        },

        addInventario: async (_:any, {inventario}:any,) =>{
            return await inventarioCont.addInventario(inventario);
        },
        updatInventario: async (_:any, {id,inventario}:any,) =>{
            return await inventarioCont.updateInventario(id,inventario);
        },
        dellInventario: async (_:any,{id}:any)=>{
            return await inventarioCont.dellInventario(id)
        },

        addModulo: async(_:any, {modulo}:any,) =>{
            return await moduloCont.addModulo(modulo);
        },
        updateModulo: async (_:any, {id,modulo}:any,) =>{
            return await moduloCont.updateModulo(id,modulo);
        },
        dellModulo: async (_:any,{id}:any)=>{
            let invents= await inventarioCont.getInventario({idModulo:id})
            // console.log(invents);
            for(let inv of invents){
                await inventarioCont.dellInventario(inv.id)
            }
            return await moduloCont.dellModulo(id);
        },
    }
}