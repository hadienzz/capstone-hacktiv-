const connectDb = require('../config/connectDB')

const getAllData = async (req, res) => {
  const { userId } = req.user
  const db = await connectDb()
  const data = await db.find({ userId }).toArray()

  if (!data) {
    return res.status(400).json({ message: "Failed to get all data" })
  }

  return res.status(200).json(data)
}
module.exports = getAllData