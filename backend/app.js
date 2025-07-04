const express = require("express");
const cors = require("cors");
const analyzeJournal = require("./controllers/analyzeJournal");
const app = express();
const PORT = 3000;
const getAllData = require('./controllers/getAllData');
const authMiddleware = require("./middleware/authMIddleware");

app.use(cors());
app.use(express.json());

app.post("/", authMiddleware, analyzeJournal);
app.get('/', getAllData)

app.listen(PORT, () => {
  console.log(`App listen on port: ${PORT}`);
});
