const connectDb = require("../config/connectDB");
const { ObjectId } = require("mongodb");

const deleteJournal = async (req, res) => {
  const { id } = req.params;
  const db = await connectDb();

  try {
    const result = await db.findOneAndDelete({ _id: new ObjectId(id) });

    if (!result) {
      return res.status(400).json({ message: "Failed to get data" });
    }
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteJournal;
