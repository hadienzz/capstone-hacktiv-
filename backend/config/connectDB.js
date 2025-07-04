const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const connectDb = async () => {
  return prisma;
};

module.exports = connectDb;
