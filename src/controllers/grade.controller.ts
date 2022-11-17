import { gradeModel } from '../models/grade.model';
import { utilServ } from '../services/util.service';

class GradeControll {

    async getGrade(grade: any) {
        utilServ.log("Grade Service", "Intento---------->  getGrade");
        return await gradeModel.find(grade);
    }

    async getGradeWhitOut(grade: any) {
        utilServ.log("Grade Service", "Intento---------->  getGradeWhitOut");
        let params: any = {}
        if (grade.id) params._id = { $not: { $regex: grade.id } }
        if (grade.idInstructor) params.idInstructor = { $not: { $regex: grade.idInstructor } }
        if (grade.nombre) params.nombre = { $not: { $regex: grade.nombre } }
        if (grade.horario) params.horario = { $not: { $regex: grade.horario } }
        if (grade.categorias) params.categorias = { $not: { $regex: grade.categorias } }
        if (grade.descripcion) params.descripcion = { $not: { $regex: grade.descripcion } }
        if (grade.duracion) params.duracion = { $not: { $regex: grade.duracion } }
        if (grade.costo) params.costo = { $not: { $regex: grade.costo } }
        if (grade.cupo) params.cupo = { $not: { $regex: grade.cupo } }

        return await gradeModel.find(params);
    }

    async getGradeSuscripted(ids: String[],idUser:String, suscripted: boolean) {
        utilServ.log("Grade Service", "Intento---------->  getGradeSuscripted");
        let params: any = {
            idInstructor:{ $not: { $regex: idUser } }
        }
        if (suscripted) {
            params._id = { $in: ids };
        } else {
            params._id = { $not: { $in: ids } }
        }
        console.log(params);
        
        return await gradeModel.find(params);
    }

    async addGrade(grade: any) {
        utilServ.log("Grade Service", "Intento---------->  addGrade");
        let horario = []
        for (let hora of grade.horario) {
            horario.push(utilServ.getHora(hora))
        }
        grade.horario = horario
        let aux = await new gradeModel(grade);
        await aux.save();
        return aux;
    }
    async dellGrade(id: String): Promise<Boolean> {
        utilServ.log("Grade Service", "Intento---------->  dellGrade");
        if (await gradeModel.findByIdAndDelete(id) != null) {
            return true;
        }
        return false;
    }
    async updatGrade(id: String, grade: any) {
        utilServ.log("Grade Service", "Intento---------->  updatGrade");
        return gradeModel.findByIdAndUpdate(id, { $set: grade }, { new: true })
    }
}

export const gradeCont = new GradeControll;