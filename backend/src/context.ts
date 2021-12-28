import dotenv from 'dotenv';
import jwt, { JwtPayload } from "jsonwebtoken";
import db from "./database";
dotenv.config();
export interface resolverContext {
    isAuth: boolean,
    user_id?: string
}

export const context = async ({req, res}) => {
    const ctx: resolverContext  = {
        isAuth: false
    }
    
    //check if the request is authenticated and set ctx.user_id accordignly
    try {
        let token : string | undefined = req.headers.authorization;
        console.log(`REQ HEADERS: ${JSON.stringify(req.headers)} \n`);
        if(token !== undefined){
            token = token.startsWith('BEARER')? token.split(" ")[0] : token;
            console.log(token);
            let decoded : any = jwt.verify(token, process.env.JWT_SECRET as string);
            console.log(decoded);
            const user_id : string = decoded.user_id;
            ctx.user_id = user_id;
            ctx.isAuth = true;
        }
    } catch (e) {
        console.log(e);        
    }
    
    return ctx;
}

export type ContextType = typeof context;