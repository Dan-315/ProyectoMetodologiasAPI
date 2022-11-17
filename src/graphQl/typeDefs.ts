import { gql } from 'apollo-server-express';

export const typeDefs = gql`

    scalar GraphQLDateTime
    type Granja{
        id:ID,
        nombre:String,
        fechaAdd:GraphQLDateTime,
        activa:Boolean
    }
    input GranjaInput{
        id:ID,
        nombre:String,
        fechaAdd:GraphQLDateTime,
        activa:Boolean
    }
    type Admin{
        id:ID,
        idGranja:ID,
        nombre:String,
        apellido:String,
        usuario:String,
        password:String
    }
    input AdminInput{
        id:ID,
        idGranja:ID,
        nombre:String,
        apellido:String,
        usuario:String,
        password:String
    }
    type Grade{
        id:ID
        idInstructor:String,
        nombre:String,
        horario:[String],
        categorias:[String],
        descripcion:String,
        duracion:Float,
        costo:Float,
        cupo:Float
    }
    input GradeInput{
        id:ID,
        idInstructor:String,
        nombre:String,
        horario:[String],
        categorias:[String],
        descripcion:String,
        duracion:Float,
        costo:Float,
        cupo:Float
    }

    type Suscrip{
        id:ID,
        idCurso:String,
        idUsuario:String,
        fechaSuscrip:String,
    }
    input SuscripInput{
        idCurso:String,
        idUsuario:String,
        fechaSuscrip:String,
    }

    type Query{
        default:String

        getGranja(granja:GranjaInput):[Granja]

        getAdmin(admin:AdminInput):[Admin]
        
        getGrade(grade:GradeInput):[Grade]

        getSuscrip(suscrip:SuscripInput):[Suscrip]

        
        getGradeWhitOut(grade:GradeInput):[Grade]

        CountSuscripPerGrade(grade:GradeInput):Float
    } 
 
    type Mutation{
        addGranja(granja:GranjaInput!):Granja,
        updatGranja(id:ID!,granja:GranjaInput):Granja
        dellGranja(id:ID!):Boolean

        addAdmin(admin:AdminInput!):Admin
        updatAdmin(id:ID!,admin:AdminInput):Admin
        dellAdmin(id:ID!):Boolean

        
        addGrade(grade:GradeInput!):Grade
        updatGrade(id:ID!,grade:GradeInput):Grade
        dellGrade(id:ID!):Boolean

        addSuscrip(suscrip:SuscripInput!):Suscrip
        updateSuscrip(id:ID!,suscrip:SuscripInput):Suscrip
        dellSuscrip(id:ID!):Boolean

    }

` 

 