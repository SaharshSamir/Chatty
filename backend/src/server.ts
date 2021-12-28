import dontenv from 'dotenv';
import { GraphQLSchema } from 'graphql';
import {ApolloServer} from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import passport from 'passport';
import express from 'express';
import cookieSession from 'cookie-session';
import schema from './module';
import { context, ContextType } from './context';
dontenv.config();

const port:number = (process.env.SERVER_PORT || 4000) as number;

// const main = async (schema: GraphQLSchema, context: ContextType, port:number) => {
//     const app = express();

//     app.use(
//         cookieSession({
//             maxAge: 1000 * 60 * 60 * 24 * 365,
//             keys: [process.env.SESSION_SECRET || "sshhh"] 
//         })
//     )
//     app.use(passport.initialize());
//     app.use(passport.session());

//     app.get("/auth/google", passport.authenticate('google', {
//         scope: ['profile', 'email']
//     }));
//     app.get(
//         '/auth/google/callback',
//         passport.authenticate('google'),
//         (req, res) => {
//           res.redirect('/home');
//         }
//     );
//     const apolloServer = new ApolloServer({
//         schema,
//         context
//     })
//     apolloServer.applyMiddleware({
//         app,
//         cors: false
//     })
//     app.listen((port:number) => {
//         console.log(`🚀Server up and running at ✨ http://localhost:${port} ✨`)
//     })
// }

// async function main(schema: GraphQLSchema, context:ContextType, port: number){
//     const app = express();
//     const httpServer = http.createServer(app);
//     const server = new ApolloServer({
//         schema,
//         context,
//         plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
//         formatError: (err) => {
//             return err
//         }
//     })
//     await server.start()
//     server.applyMiddleware({app, cors: false});
//     await new Promise<void>(resolve => httpServer.listen({port}, resolve))
//     console.log(`🚀Server up and running at ✨ http://localhost:8000 ✨`)
//     // app.listen(port, () => {
//     //     console.log(`🚀Server up and running at ✨ http://localhost:${port} ✨`)
//     // })
// }
async function startApolloServer(schema: GraphQLSchema, context: ContextType, port: number) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      schema,
      context,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      formatError: (error) => {
        console.log(error);
        return error;
      }
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port}, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
startApolloServer(schema, context, port).catch(err => {
    console.log(err);
});