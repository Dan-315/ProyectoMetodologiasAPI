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
    }
    input AdminInput{
        id:ID,
        idGranja:ID,
        nombre:String,
        apellido:String,
        usuario:String,
        password:String
    }
    type Inventario{
        id:ID,
        idModulo:String,
        concepto:String,
        minimo:Float,
        existencias:Float,
        solicitud:Float,
        fechaUpdate:GraphQLDateTime
    }
    input InventarioInput{
        id:ID,
        idModulo:String,
        concepto:String,
        minimo:Float,
        existencias:Float,
        solicitud:Float,
        fechaUpdate:GraphQLDateTime
    }

    type Modulo{
        id:ID,
        idGranja:String,
        nombre:String,
        fechaAdd:String,
    }
    input ModuloInput{
        id:ID,
        idGranja:String,
        nombre:String,
        fechaAdd:String,
    }

    type Query{
        default:String

        getGranja(granja:GranjaInput):[Granja]

        getAdmin(admin:AdminInput):[Admin]
        
        getInventario(inventario:InventarioInput):[Inventario]

        getModulo(modulo:ModuloInput):[Modulo]

    } 
 
    type Mutation{
        addGranja(granja:GranjaInput!):Granja,
        updatGranja(id:ID!,granja:GranjaInput):Granja
        dellGranja(id:ID!):Boolean

        addAdmin(admin:AdminInput!):Admin
        updatAdmin(id:ID!,admin:AdminInput):Admin
        dellAdmin(id:ID!):Boolean

        
        addInventario(inventario:InventarioInput!):Inventario
        updatInventario(id:ID!,inventario:InventarioInput):Inventario
        dellInventario(id:ID!):Boolean

        addModulo(modulo:ModuloInput!):Modulo
        updateModulo(id:ID!,modulo:ModuloInput):Modulo
        dellModulo(id:ID!):Boolean

    }

` 

 