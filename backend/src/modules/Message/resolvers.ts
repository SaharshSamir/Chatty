import { Message, Resolvers } from "../../graphql/types";

export const MessageResolver: Resolvers =  {
    Query: {
        getMessage: (_parent, _args, _context) => {
            console.log('gettting the message');
            return 'Yo get yo message, bitch';
        }
    }
}