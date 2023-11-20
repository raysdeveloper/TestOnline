const questions = [
    {
        question: "Apa sebutan pramuka di Singapura?",
        answers: [
            { text: "The Singapore scout association", correct: true },
            { text: "persekutuan pengakap Malaysia", correct: false },
            { text: "Kapatiran scouting Filipinas", correct: false },
            { text: "the bharat scout and guides", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di Malaysia?",
        answers: [
            { text: "the bharat scout and guides", correct: false },
            { text: "persekutuan pengakap Malaysia", correct: true },
            { text: "Kapatiran scouting Filipinas", correct: false },
            { text: "The Singapore scout association", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di India?",
        answers: [
            { text: "persekutuan pengakap Malaysia", correct: false },
            { text: "the bharat scout and guides", correct: true },
            { text: "Kapatiran scouting Filipinas", correct: false },
            { text: "The Singapore scout association", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di Filiphina?",
        answers: [
            { text: "Kapatiran scouting Filipinas", correct: true },
            { text: "The Singapore scout association", correct: false },
            { text: "the bharat scout and guides", correct: false },
            { text: "persekutuan pengakap Malaysia", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di Amerika?",
        answers: [
            { text: "persekutuan pengakap Malaysia", correct: false },
            { text: "boy scout of America", correct: true },
            { text: "Kapatiran scouting Filipinas", correct: false },
            { text: "the bharat scout and guides", correct: false }
        ]
    },
    {
        question: "Pramuka memiliki 3 sifat yaitu?",
        answers: [
            { text: "ramu, rakit, terap", correct: false },
            { text: "nasional, internasional, universal", correct: true },
            { text: "mandiri & suarela", correct: false },
            { text: "berjuang, mandiri, sukarela", correct: false }
        ]
    },
    {
        question: "Siapa bapak pandu sedunia?",
        answers: [
            { text: "Henrietta gracie", correct: false },
            { text: "Robert Stephenson Smyth Baden Powell of Gilwell", correct: true },
            { text: "Prof. Domine Baden Powell", correct: false },
            { text: "Agnes Monica", correct: false }
        ]
    },
    {
        question: "Baden Powell merupakan lulusan dari?",
        answers: [
            { text: "Oxford University", correct: false },
            { text: "Charterhouse School", correct: true },
            { text: "Harvard University", correct: false },
            { text: "Standford", correct: false }
        ]
    },
    {
        question: "Pangkat terakhir Baden Powel di kemiliteran?",
        answers: [
            { text: "Letnan Jendral", correct: true },
            { text: "Prajurit", correct: false },
            { text: "Letnan Kolonel", correct: false },
            { text: "Pembantu Jendral", correct: false }
        ]
    },
    {
        question: "Kapan Baden Powell dilahirkan?",
        answers: [
            { text: "8 maret 1857", correct: false },
            { text: "22 Februari 1857", correct: true },
            { text: "2 Januari 1857", correct: false },
            { text: "12 Desember 1857", correct: false }
        ]
    },
    {
        question: "Dimana Baden Powell dilahirkan?",
        answers: [
            { text: "Sydney, Australia", correct: false },
            { text: "London, Inggris", correct: true },
            { text: "Tokyo, Jepang", correct: false },
            { text: "Newyork, Amerika", correct: false }
        ]
    },
    {
        question: "Keppres nomor berapa yang berisi tentang gerakan pramuka?",
        answers: [
            { text: "No 244", correct: false },
            { text: "No 238", correct: true },
            { text: "No 1945", correct: false },
            { text: "No 450", correct: false }
        ]
    },
    {
        question: "Di kota mana KH. Agus Salim mencetuskan nama kepanduan?",
        answers: [
            { text: "Jakarta", correct: false },
            { text: "Banyumas", correct: true },
            { text: "Bandung", correct: false },
            { text: "Depok", correct: false }
        ]
    },
    {
        question: "Siapakah yang mencetuskan nama pandu atau kepanduan?",
        answers: [
            { text: "Moh. Hatta", correct: false },
            { text: "KH. Agus Salim", correct: true },
            { text: "Ir. H. Juanda", correct: false },
            { text: "Susilo Bambang Y", correct: false }
        ]
    },
    {
        question: "Kapan peristiwa Sumpah Pemuda?",
        answers: [
            { text: "31 Januari 1926", correct: false },
            { text: "28 Oktober 1928", correct: true },
            { text: "a. 20 Mei 1908", correct: false },
            { text: "17 Agustus 1945", correct: false }
        ]
    },
    {
        question: "Kapan Peristiwa Sumpah Pemuda terjadi?",
        answers: [
            { text: "28 Oktober 1928", correct: false },
            { text: "20 Mei 1908", correct: true },
            { text: "31 Mei 1908", correct: false },
            { text: "17 Agustus 1945", correct: false }
        ]
    },
    {
        question: "Organisasi apa yang menjadi latar belakang gerakan pramuka?",
        answers: [
            { text: "Muhammadiyah", correct: false },
            { text: "Boedi Oetomo", correct: true },
            { text: "OSIS", correct: false },
            { text: "Nahdlatul Ulama", correct: false }
        ]
    },
    {
        question: "Peristiwa apakah yang menjadi latar belakang majunya gerakan pramuka?",
        answers: [
            { text: "Proklamasi Kemerdekaan", correct: false },
            { text: "Sumpah Pemuda", correct: true },
            { text: "Konferensi Meja Bundar", correct: false },
            { text: "Pertemuan Asia-Afrika", correct: false }
        ]
    },
    {
        question: "Apa kepanjangan dari NIPV?",
        answers: [
            { text: "Nederland Indische Padvinders Verenig", correct: false },
            { text: "Nederland Indische Padvinders Vereniging", correct: true },
            { text: "Nusantara Indonesia Pusaka Varasa", correct: false },
            { text: "Nusantara Indonesia Pencinta Vanda", correct: false }
        ]
    },
    {
        question: "Apa nama kepanduan saat masa Hindia Belanda?",
        answers: [
            { text: "RCTI", correct: false },
            { text: "NIPV", correct: true },
            { text: "NIK", correct: false },
            { text: "NITV", correct: false }
        ]
    },
    {
        question: "Dimana kantor pusat biro kepanduan dunia?",
        answers: [
            { text: "Jakarta, Indonesia", correct: false },
            { text: "Janewa, Swiss", correct: true },
            { text: "London, Inggris", correct: false },
            { text: "Paris, Prancis", correct: false }
        ]
    },
    {
        question: "Apa nama taman yang dibuat oleh Baden Powell?",
        answers: [
            { text: "Hydro Park", correct: false },
            { text: "Gilwell Park", correct: true },
            { text: "Domine Park", correct: false },
            { text: "Smyth Park", correct: false }
        ]
    },
    {
        question: "Tanggal berapakah kematian Baden Powell?",
        answers: [
            { text: "4 Januari 1941", correct: false },
            { text: "8 Januari 1941", correct: true },
            { text: "12 Desember 2023", correct: false },
            { text: "7 November 1957", correct: false }
        ]
    },
    {
        question: "Dimanakah Baden Powell meninggal?",
        answers: [
            { text: "London, Inggris", correct: false },
            { text: "Nyeri, Kenya", correct: true },
            { text: "Dublin, Irlandia", correct: false },
            { text: "Sydney, Austria", correct: false }
        ]
    },
    {
        question: "Kapan buku Scouting For Boys diterbitkan?",
        answers: [
            { text: "8 Januari 1920", correct: false },
            { text: "15 Januari 1908", correct: true },
            { text: "20 Mei 1908", correct: false },
            { text: "1 Desember 1987", correct: false }
        ]
    },
    {
        question: "Kapan pertama kali Baden Powell mengunjungi indonesia?",
        answers: [
            { text: "2 Desember 1934", correct: false },
            { text: "3 Desember 1934", correct: true },
            { text: "3 Januari 1934", correct: false },
            { text: "2 Januari 1934", correct: false }
        ]
    },
    {
        question: "Siapa yang memberikan gelar lord pada untuk Baden Powell",
        answers: [
            { text: "Ratu Elizabeth II", correct: false },
            { text: "Raja Goerge V", correct: true },
            { text: "Raja Goerge IV", correct: false },
            { text: "Raja Goerge VI", correct: false }
        ]
    },
    {
        question: "Siapa nama anak dari Baden Powell?",
        answers: [
            { text: "Peter, Heather, Betty", correct: true },
            { text: "Robert, Harry, Sarah", correct: false },
            { text: "Jessica", correct: false },
            { text: "Richard, Susan, Charles", correct: false }
        ]
    },
    {
        question: "Siapa nama istri Baden Powell?",
        answers: [
            { text: "Agnes Andreas", correct: false },
            { text: "Olave St. Clair Soames", correct: true },
            { text: "Henrietta Grace Smyth", correct: false },
            { text: "Jessie Baden Powell", correct: false }
        ]
    },
    {
        question: "Baden Powell menulis sebuah buku yang menjadi masterpiece, apa judulnya?",
        answers: [
            { text: "The Great Explorer", correct: false },
            { text: "Scouting For Boys", correct: true },
            { text: "Jungle Book", correct: false },
            { text: "Impeesa Advanture", correct: false }
        ]
    },
    {
        question: "Istilah penegak ditandai dengan peristiwa?",
        answers: [
            { text: "Kebangkitan Nasional", correct: false },
            { text: "Proklamasi", correct: true },
            { text: "Kunjungan Bapak Pandu", correct: false },
            { text: "Sumpah Pemuda", correct: false }
        ]
    },
    {
        question: "Sebutkan urutan tingkatan dalam siaga?",
        answers: [
            { text: "Sepuh, Pamula, Pandega", correct: false },
            { text: "Mula, Bantu, Tata", correct: true },
            { text: "Tata, Bantu, Mula", correct: false },
            { text: "Siaga, Mula, Tata", correct: false }
        ]
    },
    {
        question: "Istilah penggalang ditandai dengan peristiwa?",
        answers: [
            { text: "Kebangkitan Nasional", correct: false },
            { text: "Sumpah Pemuda", correct: true },
            { text: "Proklamasi", correct: false },
            { text: "Kunjungan Bapak pandu", correct: false }
        ]
    },
    {
        question: "Istilah siaga ditandai dengan?",
        answers: [
            { text: "Kebangkitan Nasional", correct: true },
            { text: "Sumpah Pemuda", correct: false },
            { text: "Proklamasi", correct: false },
            { text: "Kunjungan Bapak pandu", correct: false }
        ]
    },
    {
        question: "Siapa Bapak Pandu Indonesia?",
        answers: [
            { text: "Baden Powel of Gilwell", correct: false },
            { text: "Sri Sultan Hamengkubowono IX", correct: true },
            { text: "Ir. Soekarno", correct: false },
            { text: "Jendral Soedirman", correct: false }
        ]
    },
    {
        question: "Apa warna pakaian gerakan pramuka di Indonesia?",
        answers: [
            { text: "Biru Tua dan Biru Putih", correct: false },
            { text: "Coklat Tua dan Coklat Muda", correct: true },
            { text: "Kuning dan Hitam", correct: false },
            { text: "Hijau dan Hitam", correct: false }
        ]
    },
    {
        question: "Siapakah pencipta lagu Hymne Pramuka?",
        answers: [
            { text: "Ki Hajar Dewantara", correct: false },
            { text: "Husein Mutahar", correct: true },
            { text: "Baden Powell", correct: false },
            { text: "Soenardjo Atmodipoerwo", correct: false }
        ]
    },
    {
        question: "Siapa penemu lambang tunas kelapa?",
        answers: [
            { text: "Ki Hajar Dewantara", correct: false },
            { text: "Soenardjo Atmodipoerwo", correct: true },
            { text: "Samuel Chris", correct: false },
            { text: "Richard Ken McLaren", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang angkatan darat?",
        answers: [
            { text: "Bakti Husada", correct: false },
            { text: "Wira Kartika", correct: true },
            { text: "Bhayangkara", correct: false },
            { text: "Taruna Bumi", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang kepolisian",
        answers: [
            { text: "Kencana", correct: false },
            { text: "Bhayangkara", correct: true },
            { text: "Wanabakti", correct: false },
            { text: "Taruna Bumi", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang pertanian?",
        answers: [
            { text: "Wanabakti", correct: false },
            { text: "Taruna Bumi", correct: true },
            { text: "Wisa Husada", correct: false },
            { text: "Lencana", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang kedirgantaraan?",
        answers: [
            { text: "Wanabakti", correct: false },
            { text: "Dirgantara", correct: true },
            { text: "Taruna Bumi", correct: false },
            { text: "Wira Kartika", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang kelautan?",
        answers: [
            { text: "Agrowisata", correct: false },
            { text: "Bahari", correct: true },
            { text: "Taruna Bumi", correct: false },
            { text: "Kencana", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang kehutanan?",
        answers: [
            { text: "Kencana", correct: false },
            { text: "Wanabakti", correct: true },
            { text: "Bhayangkara", correct: false },
            { text: "Bahari", correct: false }
        ]
    },
    {
        question: "Saka yang bergerak dalam bidang kesehatan",
        answers: [
            { text: "Taruna Bumi", correct: false },
            { text: "Bakti Husada", correct: true },
            { text: "Kencana", correct: false },
            { text: "Wirakartika", correct: false }
        ]
    },
    {
        question: "Satuan Karya atau SAKA dibina oleh?",
        answers: [
            { text: "Pamong Saka", correct: false },
            { text: "Pembina Saka", correct: true },
            { text: "Mentor Saka", correct: false },
            { text: "Instruktur", correct: false }
        ]
    },
    {
        question: "Anggota muda yang belum menjadi anggota disebut?",
        answers: [
            { text: "Anggota Muda", correct: false },
            { text: "Calon Anggota", correct: true },
            { text: "Rakyat Muda", correct: false },
            { text: "Siaga Muda", correct: false }
        ]
    },
    {
        question: "Apa kepanjangan dari WOSM?",
        answers: [
            { text: "World Organization of Scouting Movement", correct: false },
            { text: "World Organization of Scout Movement", correct: true },
            { text: "World Order of Slice Movement", correct: false },
            { text: "World Organization of Scouts and Guides", correct: false }
        ]
    },
    {
        question: "Lagu gerakan pramuka adalah?",
        answers: [
            { text: "Maju tak Gentar", correct: false },
            { text: "Hymne Pramuka", correct: true },
            { text: "Garuda Pancasila", correct: false },
            { text: "Indonesia Raya", correct: false }
        ]
    },
    {
        question: "Kapan Keppres tentang panji pramuka disahkan?",
        answers: [
            { text: "17 Agustus 1945", correct: false },
            { text: "14 Agustus 1961", correct: true },
            { text: "23 Mei 1999", correct: false },
            { text: "3 Desember 1934", correct: false }
        ]
    },
    {
        question: "Keppres Presiden tentang panji gerakan pramuka adalah?",
        answers: [
            { text: "No 447", correct: false },
            { text: "No 448", correct: true },
            { text: "No 238", correct: false },
            { text: "No 777", correct: false }
        ]
    },
    {
        question: "Apa lambang dari gerakan pramuka?",
        answers: [
            { text: "Buah Kelapa", correct: false },
            { text: "Tunas Kelapa", correct: true },
            { text: "Tunas Kepala", correct: false },
            { text: "Buah Kepala", correct: false }
        ]
    },
    {
        question: "Motto gerakan pramuka adalah?",
        answers: [
            { text: "Siap sejati membangun bangsa", correct: false },
            { text: "Satyaku Ku Darmakan Darmaku Ku Baktikan", correct: true },
            { text: "darmaku Ku Baktikan satyaku Ku Darmakan", correct: false },
            { text: "Bhinneka Tunggal Ika", correct: false }
        ]
    },
    {
        question: "Kode kehormatan pramuka?",
        answers: [
            { text: "Salam pramuka", correct: false },
            { text: "Tri Satya dan Dasa Dharma", correct: true },
            { text: "Dwi Dharma dan Pancadarma", correct: false },
            { text: "Trisatya dan Dwi Dharma", correct: false }
        ]
    },
    {
        question: "Gerakan pramuka berdasarkan atas asas?",
        answers: [
            { text: "Masyarakat", correct: false },
            { text: "Pancasila", correct: true },
            { text: "Presiden", correct: false },
            { text: "Gotong - Royong", correct: false }
        ]
    },
    {
        question: "Kapan tanggal memperingati hari pramuka?",
        answers: [
            { text: "17 Agustus", correct: false },
            { text: "14 Agustus", correct: true },
            { text: "25 Desember", correct: false },
            { text: "27 November", correct: false }
        ]
    },
    {
        question: "Apa kepanjangan dari pramuka?",
        answers: [
            { text: "Prajurit Cerdas Ceria", correct: false },
            { text: "Praja Muda Karana", correct: true },
            { text: "Praktisi Keagamaan Masyarakat", correct: false },
            { text: "Perjuang Hak Manusia", correct: false }
        ]
    },
    {
        question: "Apa pertemuan untuk siaga?",
        answers: [
            { text: "Jambore", correct: false },
            { text: "Pesta Siaga", correct: true },
            { text: "Lomba Tingkat", correct: false },
            { text: "Raimuna", correct: false }
        ]
    },
    {
        question: "Apa pertemuan untuk Penggalang?",
        answers: [
            { text: "Pesta Siaga", correct: false },
            { text: "Jambore", correct: true },
            { text: "Lomba Tingkat", correct: false },
            { text: "Raimuna", correct: false }
        ]
    },
    {
        question: "Apa pertemuan untuk Pandega & Penegak?",
        answers: [
            { text: "Jambore", correct: false },
            { text: "Raimuna", correct: true },
            { text: "Lomba Tingkat", correct: false },
            { text: "Pesta Siaga", correct: false }
        ]
    },
    {
        question: "Apa saja 3 tingkatan TKK",
        answers: [
            { text: "Awal, Lanjut, Tinggi", correct: false },
            { text: "Purwa, Madya, Utama", correct: true },
            { text: "Dasar, Menengah, Tinggi", correct: false },
            { text: "Pertama, Kedua, Ketiga", correct: false }
        ]
    },
    {
        question: "Apa judul lagu perang pandu yang sering dinyanyikan suku Zulu?",
        answers: [
            { text: "Hei Pando", correct: false },
            { text: "Eengonyama", correct: true },
            { text: "Singo Raja", correct: false },
            { text: "Pramuka Berkemah", correct: false }
        ]
    },
    {
        question: "Kapan Jambore Dunia pertama kali diadakan?",
        answers: [
            { text: "Tahun 1924", correct: false },
            { text: "Tahun 1920", correct: true },
            { text: "Tahun 1933", correct: false },
            { text: "Tahun 1829", correct: false }
        ]
    },
    {
        question: "Berapa jumlah peserta yang mengikuti Jambore Dunia ke-3?",
        answers: [
            { text: "20,000", correct: false },
            { text: "50,000", correct: true },
            { text: "45,980", correct: false },
            { text: "10,000", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-4 pertama kali memperkenalkan apa?",
        answers: [
            { text: "Pertemuan Penegak", correct: false },
            { text: "Scout Stamps", correct: true },
            { text: "Pandu Udara", correct: false },
            { text: "Kejuaraan Pandu", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-5 diselenggarakan di negara mana?",
        answers: [
            { text: "Denmark", correct: false },
            { text: "Belanda", correct: true },
            { text: "Newzealand", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-6 di kenal sebagai?",
        answers: [
            { text: "Jambore of Mud", correct: false },
            { text: "Jambore Perdamaian", correct: true },
            { text: "Jambore in The Jungle", correct: false },
            { text: "Lost Jambore", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-7 diadakan pada tahun?",
        answers: [
            { text: "1959", correct: false },
            { text: "1951", correct: true },
            { text: "1980", correct: false },
            { text: "1999", correct: false }
        ]
    },
    {
        question: "Dimana Jambore Dunia ke-7 dilaksanakan?",
        answers: [
            { text: "Filipina", correct: false },
            { text: "Austria", correct: true },
            { text: "Yunani", correct: false },
            { text: "Kanada", correct: false }
        ]
    },
    {
        question: "Berapa negara yang ikut serta dalam Jambore Dunia ke-9?",
        answers: [
            { text: "10 Negara", correct: false },
            { text: "80 Negara", correct: true },
            { text: "60 Negara", correct: false },
            { text: "312 Negara", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-8 pertama kali diadakan di luar Eropa, dimana?",
        answers: [
            { text: "Ambon", correct: false },
            { text: "Amerika", correct: true },
            { text: "Aceh", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Dimana Jambore Dunia ke-10 diadakan?",
        answers: [
            { text: "1989", correct: false },
            { text: "1959", correct: true },
            { text: "1979", correct: false },
            { text: "1969", correct: false }
        ]
    },
    {
        question: "Di negara mana Jambore Dunia ke-10 diadakan?",
        answers: [
            { text: "Indonesia", correct: false },
            { text: "Filipina", correct: true },
            { text: "Malaysia", correct: false },
            { text: "Singapura", correct: false }
        ]
    },
    {
        question: "Apa tema dari Jambore Dunia ke-11?",
        answers: [
            { text: "One World, One Promise", correct: false },
            { text: "Creating a Better Future Together", correct: true },
            { text: "Simply Scouting", correct: false },
            { text: "Guide for a Boys and Girls Scout", correct: false }
        ]
    },
    {
        question: "Dimana Jambore Dunia ke-24 dilaksanakan?",
        answers: [
            { text: "Jepang", correct: false },
            { text: "Amerika Serikat", correct: true },
            { text: "Indonesia", correct: false },
            { text: "Polandia", correct: false }
        ]
    },
    {
        question: "Apa yang menjadi tema Jambore Dunia 2003 di Thailand?",
        answers: [
            { text: "Five Fingers One Hand", correct: false },
            { text: "Share Our World, Share the Adventure", correct: true },
            { text: "Building Friendships for Peace", correct: false },
            { text: "Creating a Better Future Together", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-21 diperingati untuk merayakan apa?",
        answers: [
            { text: "5 tahun hari pandu dunia", correct: false },
            { text: "100 tahun hari kepanduan dunia", correct: true },
            { text: "125 tahun Baden Powell", correct: false },
            { text: "75 tahun hari pandu dunia", correct: false }
        ]
    },
    {
        question: "Di mana Jambore Dunia ke-22 diselenggarakan?",
        answers: [
            { text: "China", correct: false },
            { text: "Inggris", correct: true },
            { text: "Swedia", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "Apa tema dari Jambore Dunia ke-22?",
        answers: [
            { text: "One World, One Smart", correct: false },
            { text: "Simply Scouting", correct: true },
            { text: "Five Fingers, One Hand", correct: false },
            { text: "Personal Development", correct: false }
        ]
    },
    {
        question: "Apa yang dimaksud dengan IST dalam konteks Jambore Dunia?",
        answers: [
            { text: "International Scout Troop", correct: false },
            { text: "Individual Support Team", correct: true },
            { text: "International Scouting Tradition", correct: false },
            { text: "Internal Scouting Techniques", correct: false }
        ]
    },
    {
        question: "Berapa tema yang harus dilaksanakan setiap anggota IST?",
        answers: [
            { text: "4 Tema", correct: false },
            { text: "2 Tema", correct: true },
            { text: "1 Tema", correct: false },
            { text: "3 Tema", correct: false }
        ]
    },
    {
        question: "Apa yang melambangkan tema Five Fingers One Hand pada Jambore Dunia ke-14?",
        answers: [
            { text: "Lima jari tangan", correct: false },
            { text: "Lima negara Skandinavia", correct: true },
            { text: "Lima mata angin", correct: false },
            { text: "Lima indra manusia", correct: false }
        ]
    },
    {
        question: "Jambore Dunia terakhir yang diselenggarakan pada tahun 1998-1999 terkenal dengan nama apa?",
        answers: [
            { text: "World 19 Jambore", correct: false },
            { text: "International Jambore", correct: true },
            { text: "Millennium Jambore", correct: false },
            { text: "NordJamb75", correct: false }
        ]
    },
    {
        question: "Berapa jumlah peserta pada Jambore Dunia ke-16 di Australia?",
        answers: [
            { text: "10,000", correct: false },
            { text: "20,000", correct: true },
            { text: "17,000", correct: false },
            { text: "13,000", correct: false }
        ]
    },
    {
        question: "Apa yang menjadi tema Jambore Dunia ke-17 di Korea Selatan?",
        answers: [
            { text: "Friendship Guide", correct: false },
            { text: "One World, One Promise", correct: true },
            { text: "Friend Zone", correct: false },
            { text: "Building a Structur", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-19 di Parquin Chille menandai apa?",
        answers: [
            { text: "Jambore of the Americas", correct: false },
            { text: "World Scout Jamboree Year", correct: true },
            { text: "125 tahun Baden Powell", correct: false },
            { text: "80 tahun Baden Powell", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-20 di Thailand menyoroti isu-isu dunia melalui kegiatan apa?",
        answers: [
            { text: "World Issues Symposium", correct: false },
            { text: "Global Discussions and Views (GDV)", correct: true },
            { text: "International Scout Talks", correct: false },
            { text: " Worldwide Problems Forum", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-21 di Inggris diperingati untuk merayakan apa?",
        answers: [
            { text: "50 tahun hari kepanduan", correct: false },
            { text: "75 Tahun hari pandu dunia", correct: true },
            { text: "100 tahun kemerdekaan inggris", correct: false },
            { text: "70 tahun keman ayah Baden Powell", correct: false }
        ]
    },
    {
        question: "Berapa jumlah negara yang berpartisipasi dalam Jambore Dunia ke-22 di Swedia?",
        answers: [
            { text: "190", correct: false },
            { text: "170", correct: true },
            { text: "120", correct: false },
            { text: "123", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-24 di Amerika Serikat diadakan di negara bagian mana?",
        answers: [
            { text: "Florida", correct: false },
            { text: "West Virginia", correct: true },
            { text: "Newyork", correct: false },
            { text: "California", correct: false }
        ]
    },
    {
        question: "Berapa jumlah peserta dalam Jambore Dunia ke-24?",
        answers: [
            { text: "Lebih dari 20,000", correct: false },
            { text: "Lebih dari 30,000", correct: true },
            { text: "Lebih dari 40,000", correct: false },
            { text: "Lebih dari 50,000", correct: false }
        ]
    },
    {
        question: "Apa yang menjadi tema Jambore Dunia ke-25 di Polandia?",
        answers: [
            { text: "Scouting for Peace", correct: false },
            { text: "Experience Unity", correct: true },
            { text: "Future be Better", correct: false },
            { text: "Be Prepared", correct: false }
        ]
    },
    {
        question: "Jambore Dunia ke-27 diadakan di negara mana dan pada tahun berapa?",
        answers: [
            { text: "Spanyol, 2007", correct: false },
            { text: "Spanyol, 2027", correct: true },
            { text: "Spanyol, 2023", correct: false },
            { text: "Spanyol, 2026", correct: false }
        ]
    },
    {
        question: "Pada tahun berapa Jabatan TKK dibentuk?",
        answers: [
            { text: "1987", correct: false },
            { text: "1928", correct: true },
            { text: "1897", correct: false },
            { text: "1989", correct: false }
        ]
    },
    {
        question: "Tokoh Kepanduan Kepala bertanggung jawab atas",
        answers: [
            { text: "Pembinaan dan pengembangan gerakan kepanduan di seluruh dunia", correct: true },
            { text: "Pelaksanaan program kegiatan kepramukaan tingkat nasional", correct: false },
            { text: "Pembinaan dan pengembangan gerakan kepanduan tingkat provinsi", correct: false },
            { text: "Pengembangan Gerakan Pramuka di seluruh dunia", correct: false }
        ]
    },
    {
        question: "Siapakah Tokoh Kepanduan Kepala saat ini (2023)?",
        answers: [
            { text: "Dr. Adhyaksa Dault", correct: false },
            { text: " Dr. Ir. Adhy Karyono, M.M.", correct: true },
            { text: "Ir. Adhy Karyono, M.M", correct: false },
            { text: "Drs. H. Adhyaksa Dault", correct: false }
        ]
    },
    {
        question: "Berapa masa jabatan seorang Tokoh Kepanduan Kepala?",
        answers: [
            { text: "10 tahun", correct: false },
            { text: "5 tahun", correct: true },
            { text: "7 tahun", correct: false },
            { text: "9 tahun", correct: false }
        ]
    },
    {
        question: "Buku African Adventures diterbitkan oleh Baden Powell pada tahun?",
        answers: [
            { text: "1878", correct: false },
            { text: "1937", correct: true },
            { text: "1857", correct: false },
            { text: "1855", correct: false }
        ]
    },
    {
        question: "Pada tahun berapa Baden Powell mendapatkan penghargaan Metabele Campaign?",
        answers: [
            { text: "1898", correct: false },
            { text: "1897", correct: true },
            { text: "1998", correct: false },
            { text: "1900", correct: false }
        ]
    },
    {
        question: "gelar kehormatan apa yang diberi Universitas Oxford untuk Baden Powell?",
        answers: [
            { text: "Doctor & Sarjana", correct: false },
            { text: "Doctor ilmu-ilmu sosial", correct: true },
            { text: "Magister", correct: false },
            { text: "Agribisnis", correct: false }
        ]
    },
]

export default questions