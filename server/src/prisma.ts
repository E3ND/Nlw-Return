import { PrismaClient } from "@prisma/client";

// mostra no log as configs feitas
export const prisma = new PrismaClient({
    log: ['query'],
});