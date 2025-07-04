const express = require("express");
const cors = require("cors");
const analyzeJournal = require("./controllers/analyzeJournal");
const getAllData = require("./controllers/getAllData");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/", analyzeJournal);
app.get('/', getAllData)


app.listen(PORT, () => {
  console.log(`App listen on port: ${PORT}`);
});
