const express = require("express");
const cors = require("cors");
const analyzeJournal = require("./controllers/analyzeJournal");
const app = express();
const PORT = 3000;
const getAllData = require('./controllers/getAllData');
const authMiddleware = require("./middleware/authMIddleware");
const getSelectData = require('./controllers/getSelectedData');
const deleteJournal = require("./controllers/deleteJournal");

app.use(cors());
app.use(express.json());

app.post("/", authMiddleware, analyzeJournal);
app.post("/:id", authMiddleware, deleteJournal)
app.get('/:id', authMiddleware, getSelectData)
app.get('/', authMiddleware, getAllData)


app.listen(PORT, () => {
  console.log(`App listen on port: ${PORT}`);
});
