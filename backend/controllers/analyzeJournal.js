require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(`${process.env.GEMINI_API_KEY}`);
const connectDb = require("../config/connectDB");

const analyzeJournal = async (req, res) => {
  const { journal, mood, title } = req.body;
  const { userId } = req.user;
  const db = await connectDb();
  const now = new Date();
  const time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          parts: [
            {
              text: `Anda adalah AI analis psikolog profesional. 
  Tugas Anda adalah memberikan **dukungan** dan **saran** berdasarkan jurnal user di bawah ini. Usahakan dukungan dan saran tidak terlalu panjang tetapi kena point dari inputan user.
  ⚠️ Jangan mengubah nilai "emosi" yang sudah diberikan user. Biarkan tetap sama seperti input user.
  Berikan hasil akhir dalam format JSON **tanpa tanda kutip tiga atau code block**, agar bisa langsung diparse di frontend. Gunakan format berikut:
  
    {
      "emosi": "${mood}",
      "dukungan": "",
      "saran": ""
    }
  
    Berikut jurnal user:
    "${journal}"`,
            },
          ],
        },
      ],
    });

    const insight = response.candidates[0].content.parts[0].text;
    const result = await db.insertOne({
      title,
      user: journal,
      bot: insight,
      userId,
      createdAt: now.toISOString().split("T")[0],
      time,
      mood
    });

    return res
      .status(200)
      .json({ message: `Success add new journal ${result}` });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports = analyzeJournal;
