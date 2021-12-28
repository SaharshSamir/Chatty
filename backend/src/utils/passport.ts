import { Prisma, User} from "@prisma/client";
import passport from "passport";
import GoogleStrategy from 'passport-google-oauth20';
import db from '../database'

passport.serializeUser((user: Express.User, done) => {
    done(null, user.user_id);
})

passport.deserializeUser(async (id:string, done) => {
    const currentUser = await db.user.findFirst({
        where: {
            user_id: id
        }
    })
    done(null, currentUser);
})

passport.use(
    new GoogleStrategy.Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SERCRET || "",
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (_accessToken, _refreshToken, profile, done) => {
            
            let newUser : User;
            const existingUser = await db.user.findFirst({
                where:{
                    user_id: profile.id
                }
            });
            if(existingUser){
                return done(null, existingUser);
            }else if(profile) {
                newUser = await db.user.create({
                    data: {
                        user_id: profile.id,
                        email: profile.displayName,
                        username: profile.username || "" 
                    }
                })
                return done(null, newUser);
            }
        }
    )
)
