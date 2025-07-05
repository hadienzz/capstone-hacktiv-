const { ObjectId } = require("mongodb")
const connectDb = require("../config/connectDB")

const getSelectData = async (req, res) => {
    const db = await connectDb()
    const { id } = req.params
    try {
        const selectedJournal = await db.findOne({ _id: new ObjectId(id) })
        if (!selectedJournal) {
            return res.status(400).json({ message: 'Failed to get journal' })
        }
        return res.status(200).json(selectedJournal)

    } catch (err) {
        console.log(err)
    }
}

module.exports = getSelectData