import { adminCont } from "../controllers/admin.controller";
import { gradeCont } from "../controllers/grade.controller";
import { granjaCont } from "../controllers/granja.controller"; 
import { suscripCont } from "../controllers/suscrip.controller";

export const resolvers = {
    Query:{
        default: ()=> 'GraphQL default execution',

        getGranja: async (_:any,{granja}:any)=>{
            return await granjaCont.getGranja(granja)
        },

        getAdmin: async (_:any,{admin}:any)=>{
            return await adminCont.getAdmin(admin);
        },

        getGrade: async (_:any,{grade}:any)=>{
            return await gradeCont.getGrade(grade);
        },

        getSuscrip: async(_:any,{suscrip}:any)=>{
            return await suscripCont.getSuscrip(suscrip);
        },

        getGradeWhitOut: async (_:any,{grade}:any)=>{
            return await gradeCont.getGradeWhitOut(grade);
        }, 


        CountSuscripPerGrade: async(_:any,{grade}:any)=>{
            let suscrips=await suscripCont.getSuscrip({idCurso:grade.id});
            return suscrips.length;
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

        addGrade: async (_:any, {grade}:any,) =>{
            return await gradeCont.addGrade(grade);
        },
        updatGrade: async (_:any, {id,grade}:any,) =>{
            return await gradeCont.updatGrade(id,grade);
        },
        dellGrade: async (_:any,{id}:any)=>{
            return await gradeCont.dellGrade(id)
        },

        addSuscrip: async(_:any, {suscrip}:any,) =>{
            return await suscripCont.addSuscrip(suscrip);
        },
        updateSuscrip: async (_:any, {id,suscrip}:any,) =>{
            return await suscripCont.updateSuscrip(id,suscrip);
        },
        dellSuscrip: async (_:any,{id}:any)=>{
            return await suscripCont.dellSuscrip(id);
        },
    }
}