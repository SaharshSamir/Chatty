import { GraphQLSchema } from 'graphql';
import {ApolloServer} from 'apollo-server';
import dontenv from 'dotenv';
import schema from './module';
import { context } from './context';
dontenv.config();

const port = process.env.SERVER_PORT || 4000;

function startServer(schema: GraphQLSchema, context){
    new ApolloServer({
        schema,
        context,
        formatError: (err) => {
            return err
        }
    }).listen(port, () => {
        console.log(`🚀Server up and running at http://localhost:${port}`)
    })
}

startServer(schema, context);