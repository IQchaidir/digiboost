const events = [
  {
    year: "2017",
    title: "Awal Perjalanan",
    description:
      "[Nama Perusahaan] didirikan sebagai respon terhadap evolusi kebutuhan pemasaran digital. Tim inti yang penuh semangat bersama-sama membentuk visi perusahaan.",
  },
  {
    year: "2018",
    title: "Pertumbuhan Awal",
    description:
      "[Nama Perusahaan] mendapatkan klien pertamanya, membuka pintu bagi proyek-proyek pertama di dunia digital. Perusahaan memperluas portofolio layanan, fokus pada pengembangan situs web dan strategi media sosial.",
  },
  {
    year: "2019",
    title: "Pertumbuhan Awal",
    description:
      "[Nama Perusahaan] merilis kampanye-kampanye yang mencuri perhatian, menandai langkah maju dalam pemasaran digital. Pertumbuhan tim menjadi kunci; [Nama Perusahaan] menerima pengakuan pertama dari industri dan mulai meraih kepercayaan klien-klien berpengaruh.",
  },
  {
    year: "2020",
    title: "Pertumbuhan Awal",
    description:
      "Pandemi memaksa [Nama Perusahaan] untuk beradaptasi dengan tren baru, dengan tim yang berhasil bekerja secara remote. Peluncuran layanan baru seperti manajemen kampanye iklan online, menambah dimensi baru pada portofolio [Nama Perusahaan].",
  },
  {
    year: "2021",
    title: "Pertumbuhan Awal",
    description:
      '[Nama Perusahaan] merayakan tahun kelima dengan pencapaian besar; mengamankan tempatnya sebagai agensi digital yang diperhitungkan. Terpilih sebagai "Top Digital Agency of the Year" oleh [Nama Penghargaan], memberikan pijakan yang kokoh di industri.',
  },
  {
    year: "2022",
    title: "Pertumbuhan Awal",
    description:
      "Kemitraan strategis dengan perusahaan luar negeri memungkinkan [Nama Perusahaan] memperluas jejaknya di pasar global. Pencapaian pendapatan tahunan tertinggi hingga saat ini, menandai pertumbuhan yang konsisten.",
  },
  {
    year: "2023",
    title: "Pertumbuhan Awal",
    description:
      "[Nama Perusahaan] terus berinovasi dengan penerapan kecerdasan buatan dalam strategi pemasaran digital. Proyek-proyek revolusioner [Nama Perusahaan] memberikan dampak positif pada reputasi dan kepuasan klien.",
  },
];

const AboutTimeline = () => {
  return (
    <div className="px-4 md:px-8 lg:px-36 pt-10 md:pt-20 flex flex-col justify-center text-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-8 mb-4">
        Timeline Sejarah [Nama Perusahaan]
      </h1>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-10 space-y-6 md:space-y-8 relative">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-3/5 relative z-10">
              <div className="p-4 md:p-6 bg-white rounded-md shadow-md text-left">
                <span className="text-base md:text-lg font-semibold text-red-400">
                  {event.year}
                </span>
                <p className="text-black text-sm md:text-base">
                  {event.description}
                </p>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="hidden md:block h-full w-1 bg-red-400 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;
