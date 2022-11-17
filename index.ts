import express, { Express, Request, Response } from 'express';
import { apprendeDB } from './config/database';
import dotenv from 'dotenv';
import { utilServ } from './src/services/util.service';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './src/graphQl/typeDefs'
import { resolvers } from './src/graphQl/resolvers'
import { Error } from 'mongoose';
import moment from 'moment-timezone'

async function start() {

  dotenv.config();

  const app: Express = express();
  const port = process.env.PORT ? process.env.PORT : ""
  const host = process.env.DBHOST ? process.env.DBHOST : ""
  const db = process.env.DBNAME ? process.env.DBNAME : ""

  const apolloServ = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServ.start();

  apolloServ.applyMiddleware({ app })

  app.get('/', (req, res) => res.send("Apprende API"))
  app.get('*', (req, res) => res.status(404).send("Ruta no encontrada"))

  try {
    app.listen(port, () => {
      utilServ.log(
        `${process.env.HOST}:${port}`, `Servidor iniciado. GrphQL playground en:

        ${process.env.HOST}:${port}/graphql`, "info");
    })
  } catch (error) {
    let e:Error=error as Error;
    utilServ.log(`${process.env.HOST}:${port}`, e.name+": "+e.message, "error");
  }

  apprendeDB.initConect(host, db).then(() => {
    utilServ.log(host + db, "Conectado satisfactoriamente", "info");
  }).catch((error: Error) => {
    utilServ.log(host + db, error.name+": "+error.message, "error");
  })

}

start();
