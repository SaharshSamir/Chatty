import db from "../../database";
import { Message, Resolvers } from "../../graphql/types";

import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

const CHAT_CHANNEL = 'CHAT_CHANNEL'
export const MessageResolver: Resolvers =  {
    Query: {
        getMessage: (_parent, _args, _context) => {
            console.log('gettting the message');
            return 'Yo get yo message, bitch';
        }
    },
    Mutation:{
        sendMessage:async (_parent, args, context)=>{
            const {text, senderId, conversation_id}=args;
            const newChat=await db.message.create({
                data:{
                    senderId:senderId,
                    text:text,
                    conversation_id:conversation_id
                }
            })
            //pubsub.publish('CHAT_CHANNEL', { messageSent:{messageId:newChat.messageId} })

            return newChat;
        }
    },
    Subscription: {
        messageSent: {
          subscribe: (root, args, { pubsub }) => {
            return pubsub.asyncIterator(CHAT_CHANNEL)
          }
        }
      }

    // Subscription: {
    //     messageSent: {
    //       subscribe: () => pubsub.asyncIterator(CHAT_CHANNEL),
    //     },
    //   },
}