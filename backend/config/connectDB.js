require('dotenv').config()

const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.MONGODB_API_KEY)

const connectDb = async () => {
  await client.connect()
  const db = client.db('chatbotDb').collection('conversations')
  return db
}

module.exports = connectDb