import db from "../../database";
import { Conversation, Resolvers } from "../../graphql/types";


export const ConversationResolver: Resolvers =  {
    Mutation:{
       newCon:async(_parent, args, context)=>{
           const {is_groupChat}=args;
           const newconv=await db.conversation.create({
               data:{
                   is_groupChat:is_groupChat
               }
           })
           return newconv;
       },
      addParticipant:async(_parent, args)=>{
        const {conversation_id, user_id}=args;
        const newPart=await db.conversation.update({
            where:{conversation_id:conversation_id},
            data:{
                participants:{
                    connect:{
                        user_id:user_id
                    }
                }
            }
        })
        return null;
      }
    }
    
}