import { User as PrismaUserType } from "prisma/prisma-client";

declare global {
    namespace Express {
        interface User extends PrismaUserType {}
    }
}