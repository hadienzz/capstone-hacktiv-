const connectDb = require("../config/connectDB");

const getAllData = async (req, res) => {
  const prisma = await connectDb();
  const data = await prisma.journal.findMany();
  return res.json(data);
};

module.exports = getAllData;
