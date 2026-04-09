const quotes = {
  indonesia: [
    { id: 1, quote: "Hidup bukan tentang menemukan diri sendiri. Hidup adalah tentang menciptakan diri sendiri.", author: "George Bernard Shaw" },
    { id: 2, quote: "Jangan takut gagal. Takutlah bila kamu tidak pernah mencoba.", author: "Unknown" },
    { id: 3, quote: "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.", author: "Colin Powell" },
    { id: 4, quote: "Mimpi bukan yang kamu lihat saat tidur, tapi yang tidak membiarkanmu tidur.", author: "A.P.J. Abdul Kalam" },
    { id: 5, quote: "Orang yang luar biasa itu sederhana dalam ucapan, tetapi hebat dalam tindakan.", author: "Confucius" },
    { id: 6, quote: "Jangan menunggu waktu yang tepat, ciptakan waktumu sendiri.", author: "Unknown" },
    { id: 7, quote: "Kegagalan adalah guru terbaik yang pernah ada.", author: "Unknown" },
    { id: 8, quote: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.", author: "Steve Jobs" },
    { id: 9, quote: "Setiap hari adalah kesempatan baru untuk menjadi lebih baik dari kemarin.", author: "Unknown" },
    { id: 10, quote: "Jangan bandingkan perjalananmu dengan orang lain, setiap orang punya waktunya sendiri.", author: "Unknown" },
    { id: 11, quote: "Keberanian bukan berarti tidak takut, tapi terus melangkah meski takut.", author: "Unknown" },
    { id: 12, quote: "Bersabarlah, semua yang indah butuh waktu untuk tumbuh.", author: "Unknown" },
    { id: 13, quote: "Jadilah perubahan yang ingin kamu lihat di dunia.", author: "Mahatma Gandhi" },
    { id: 14, quote: "Hal terbesar dalam hidup bukan tentang di mana kamu berdiri, tapi ke arah mana kamu melangkah.", author: "Oliver Wendell Holmes" },
    { id: 15, quote: "Percayalah pada prosesmu, bukan hanya pada hasilnya.", author: "Unknown" },
    { id: 16, quote: "Tidak ada jalan pintas menuju tempat yang layak untuk dituju.", author: "Beverly Sills" },
    { id: 17, quote: "Mulailah dari mana kamu berada, gunakan apa yang kamu punya.", author: "Arthur Ashe" },
    { id: 18, quote: "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu bereaksi.", author: "Charles R. Swindoll" },
    { id: 19, quote: "Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai kehidupan.", author: "Charles Darwin" },
    { id: 20, quote: "Impian tanpa tindakan hanyalah angan-angan belaka.", author: "Unknown" },
    { id: 21, quote: "Bukan seberapa keras kamu jatuh, tapi seberapa cepat kamu bangkit.", author: "Unknown" },
    { id: 22, quote: "Sukses datang kepada mereka yang terlalu sibuk untuk mencarinya.", author: "Henry David Thoreau" },
    { id: 23, quote: "Kebahagiaan bukan tujuan, melainkan cara menjalani hidup.", author: "Unknown" },
    { id: 24, quote: "Jadikan setiap saat berharga, karena waktu tidak pernah kembali.", author: "Unknown" },
    { id: 25, quote: "Kamu tidak bisa kembali dan mengubah masa lalu, tapi kamu bisa mulai sekarang dan ubah masa depan.", author: "Unknown" }
  ],
  japan: [
    { id: 1, quote: "七転び八起き — Tujuh kali jatuh, delapan kali bangkit.", author: "Pepatah Jepang", romaji: "Nana korobi ya oki" },
    { id: 2, quote: "一期一会 — Setiap pertemuan adalah sekali seumur hidup, hargailah.", author: "Pepatah Jepang", romaji: "Ichi-go ichi-e" },
    { id: 3, quote: "花より団子 — Lebih baik hal yang praktis daripada yang indah saja.", author: "Pepatah Jepang", romaji: "Hana yori dango" },
    { id: 4, quote: "知らぬが仏 — Tidak tahu kadang lebih baik daripada tahu.", author: "Pepatah Jepang", romaji: "Shiranu ga hotoke" },
    { id: 5, quote: "石の上にも三年 — Duduk di atas batu tiga tahun pun akan terasa hangat. Kesabaran membuahkan hasil.", author: "Pepatah Jepang", romaji: "Ishi no ue ni mo sannen" },
    { id: 6, quote: "努力は必ず報われる — Kerja keras pasti akan terbayar.", author: "AKB48" },
    { id: 7, quote: "人生は一度きり — Hidup hanya sekali, jalani sepenuh hati.", author: "Pepatah Jepang" },
    { id: 8, quote: "今日できることを明日に延ばすな — Jangan tunda hari ini untuk besok.", author: "Pepatah Jepang" },
    { id: 9, quote: "失敗は成功のもと — Kegagalan adalah akar dari kesuksesan.", author: "Pepatah Jepang" },
    { id: 10, quote: "継続は力なり — Ketekunan adalah kekuatan.", author: "Pepatah Jepang" },
    { id: 11, quote: "自分を信じろ — Percayalah pada dirimu sendiri.", author: "Pepatah Jepang" },
    { id: 12, quote: "夢を持て — Milikilah mimpi.", author: "Pepatah Jepang" },
    { id: 13, quote: "前を向いて歩こう — Tetap melangkah maju, menatap ke depan.", author: "Pepatah Jepang" },
    { id: 14, quote: "明日は明日の風が吹く — Besok ada anginnya sendiri, jangan terlalu khawatir.", author: "Pepatah Jepang" },
    { id: 15, quote: "雨降って地固まる — Setelah hujan, tanah menjadi lebih kokoh. Masalah memperkuat kita.", author: "Pepatah Jepang" },
    { id: 16, quote: "住めば都 — Di mana pun kamu tinggal, itulah kotamu.", author: "Pepatah Jepang" },
    { id: 17, quote: "良薬は口に苦し — Obat yang baik terasa pahit di mulut. Nasihat jujur kadang menyakitkan.", author: "Pepatah Jepang" },
    { id: 18, quote: "笑う門には福来る — Kebahagiaan datang ke rumah yang penuh tawa.", author: "Pepatah Jepang" },
    { id: 19, quote: "急いては事を仕損じる — Tergesa-gesa membuat kesalahan. Bersabarlah.", author: "Pepatah Jepang" },
    { id: 20, quote: "遠くの親戚より近くの他人 — Tetangga dekat lebih berguna dari saudara jauh.", author: "Pepatah Jepang" },
    { id: 21, quote: "出る杭は打たれる — Paku yang menonjol akan dipukul. Jangan terlalu mencolok.", author: "Pepatah Jepang" },
    { id: 22, quote: "虎穴に入らずんば虎児を得ず — Tidak masuk sarang harimau, tidak dapat anak harimau. Berani ambil risiko.", author: "Pepatah Jepang" },
    { id: 23, quote: "塵も積もれば山となる — Debu yang menumpuk pun bisa jadi gunung. Hal kecil itu penting.", author: "Pepatah Jepang" },
    { id: 24, quote: "一歩一歩 — Selangkah demi selangkah.", author: "Pepatah Jepang", romaji: "Ippo ippo" },
    { id: 25, quote: "今この瞬間を大切に — Hargailah momen ini sekarang.", author: "Pepatah Jepang" }
  ],
  english: [
    { id: 1, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 2, quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { id: 3, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { id: 4, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { id: 5, quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { id: 6, quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { id: 7, quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { id: 8, quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { id: 9, quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { id: 10, quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { id: 11, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { id: 12, quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { id: 13, quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { id: 14, quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { id: 15, quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { id: 16, quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { id: 17, quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { id: 18, quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { id: 19, quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { id: 20, quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
    { id: 21, quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { id: 22, quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { id: 23, quote: "Money and success don't change people; they merely amplify what is already there.", author: "Will Smith" },
    { id: 24, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { id: 25, quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" }
  ]
};

// Handler utama
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Content-Type", "application/json");

  // Ambil lang dari URL path: /quotes/:lang
  const urlParts = req.url.split("?")[0].split("/").filter(Boolean);
  const lang = urlParts[urlParts.length - 1];
  const validLangs = ["indonesia", "japan", "english"];

  // GET /quotes → list semua bahasa
  if (!lang || !validLangs.includes(lang)) {
    return res.status(200).json({
      success: true,
      message: "shiZuv Quotes API",
      available_languages: validLangs,
      endpoints: validLangs.map(l => `/quotes/${l}`),
      total_quotes: validLangs.reduce((acc, l) => acc + quotes[l].length, 0)
    });
  }

  const params = new URLSearchParams(req.url.split("?")[1] || "");
  const type = params.get("type");

  // Random quote
  if (type === "random") {
    const pool = quotes[lang];
    const random = pool[Math.floor(Math.random() * pool.length)];
    return res.status(200).json({
      success: true,
      language: lang,
      data: random
    });
  }

  // All quotes by language
  return res.status(200).json({
    success: true,
    language: lang,
    total: quotes[lang].length,
    data: quotes[lang]
  });
}
