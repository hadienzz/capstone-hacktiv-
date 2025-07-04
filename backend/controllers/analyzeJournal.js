require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(`${process.env.GEMINI_API_KEY}`);

const analyzeJournal = async (req, res) => {
  const { journal, mood } = req.body;
  console.log(journal, mood);
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
  return res.status(200).json(insight);
};

module.exports = analyzeJournal;
