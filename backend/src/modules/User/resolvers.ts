import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { Resolvers, User } from "../../graphql/types";
import db from "../../database";
import { context, resolverContext } from '../../context';
dotenv.config();
import { Prisma } from '@prisma/client';
import { UserInputError } from 'apollo-server-core';

export const UserResolvers : Resolvers<resolverContext> = {
    Query: {
        me: async (_parent, _args, context) => {
            let currentUser : User | null = null;
            if(context.isAuth){
                currentUser = await db.user.findFirst({
                    where: {
                        user_id: context.user_id
                    }
                })
            }
            return currentUser;
        },
        login: async (_parent, args) => {
            const {email, password} = args;
            const existingUser = await db.user.findFirst({
                where: {
                    email: email
                }
            });
            if(existingUser !== null && !(await bcrypt.compare(password, existingUser.password))){
                throw new UserInputError("Invalid credentials");
            }
            const token : string = jwt.sign({user_id: existingUser?.user_id}, process.env.JWT_SECRET as string);

            return token;

        }
        

    },
    Mutation: {
        signUp: async (_parent, args) => {
            const {email, username, password} = args;

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = await db.user.create({
                data: {
                    email: email,
                    username: username,
                    password: hashedPassword,
                }
            })

            let token : string = jwt.sign({user_id: newUser.user_id}, process.env.JWT_SECRET as string, {
                expiresIn: "1h"
            });

            console.log(newUser);
            return token;
        }
    }
}