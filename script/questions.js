const questions = [
    {
        question: "Apa sebutan pramuka di Singapura?",
        answers: [
            { text: "The Singapore Scout Association", correct: true },
            { text: "Kapatiran Scouting Filipinas", correct: false },
            { text: "Persekutuan Pengakap Malaysia", correct: false },
            { text: "Boy Scout of America", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di Malaysia?",
        answers: [
            { text: "The Singapore Scout Association", correct: false },
            { text: "Kapatiran Scouting Filipinas", correct: false },
            { text: "Persekutuan Pengakap Malaysia", correct: true },
            { text: "Boy Scout of America", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di Filipina?",
        answers: [
            { text: "The Singapore Scout Association", correct: false },
            { text: "Kapatiran Scouting Filipinas", correct: true },
            { text: "Persekutuan Pengakap Malaysia", correct: false },
            { text: "Boy Scout of America", correct: false }
        ]
    },
    {
        question: "Apa sebutan pramuka di India?",
        answers: [
            { text: "The Singapore Scout Association", correct: false },
            { text: "Kapatiran Scouting Filipinas", correct: false },
            { text: "Persekutuan Pengakap Malaysia", correct: false },
            { text: "The Bharat Scout and Guides", correct: true }
        ]
    },
    {
        question: "Apa sebutan pramuka di Amerika?",
        answers: [
            { text: "The Singapore Scout Association", correct: false },
            { text: "Kapatiran Scouting Filipinas", correct: false },
            { text: "Persekutuan Pengakap Malaysia", correct: false },
            { text: "Boy Scouts of America", correct: true }
        ]
    },
    {
        question: "Pramuka memiliki 3 sifat yaitu?",
        answers: [
            { text: "Nasional, Internasional, Universal", correct: true },
            { text: "Regional, Lokal, Khusus", correct: false },
            { text: "Global, Regional, Lokal", correct: false },
            { text: "Nasional, Regional, Lokal", correct: false }
        ]
    },
    {
        question: "Didalam try satya ada enam kewajiban?",
        answers: [
            { text: "Terhadap Tuhan, Negara Kesatuan, Pancasila, Sesama Hidup, Masyarakat, Dasa Dharma", correct: true },
            { text: "Terhadap Allah, Negara, Pancasila, Sesama Manusia, Masyarakat, Dasa Dharma", correct: false },
            { text: "Terhadap Tuhan, Negara, Pancasila, Sesama Manusia, Masyarakat, Dasa Dharma", correct: false },
            { text: "Terhadap Tuhan, Negara Kesatuan, Bhinneka Tunggal Ika, Sesama Manusia, Masyarakat, Dasa Dharma", correct: false }
        ]
    },
    {
        question: "Siapa bapak pandu sedunia?",
        answers: [
            { text: "Lord Robert Baden-Powell", correct: true },
            { text: "Sir William Smith", correct: false },
            { text: "Kenneth McLaren", correct: false },
            { text: "Henry Smyth", correct: false }
        ]
    },
    {
        question: "Lulusan manakah Baden-Powell?",
        answers: [
            { text: "Eton College", correct: false },
            { text: "Harrow School", correct: false },
            { text: "Charterhouse School", correct: true },
            { text: "Royal Military Academy Woolwich", correct: false }
        ]
    },
    {
        question: "Pangkat terakhir Baden-Powell di kemiliteran?",
        answers: [
            { text: "Kolonel", correct: false },
            { text: "Mayor Jenderal", correct: false },
            { text: "Jenderal", correct: false },
            { text: "Letnan Jenderal", correct: true }
        ]
    },
    {
        question: "Kapan Baden-Powell dilahirkan?",
        answers: [
            { text: "11 Februari 1857", correct: false },
            { text: "22 Februari 1857", correct: true },
            { text: "1 Maret 1857", correct: false },
            { text: "15 Maret 1857", correct: false }
        ]
    },
    {
        question: "Dimanakah Baden-Powell dilahirkan?",
        answers: [
            { text: "Manchester, Inggris", correct: false },
            { text: "Liverpool, Inggris", correct: false },
            { text: "London, Inggris", correct: true },
            { text: "Bristol, Inggris", correct: false }
        ]
    },
    {
        question: "Siapakah yang memberi gelar kebangsawanan kepada Baden-Powell?",
        answers: [
            { text: "Ratu Elizabeth II", correct: false },
            { text: "Raja George V", correct: true },
            { text: "Raja George VI", correct: false },
            { text: "Raja Edward VII", correct: false }
        ]
    },
    {
        question: "Siapakah ayah Baden-Powell?",
        answers: [
            { text: "Prof. Dominie Baden Powell", correct: true },
            { text: "Sir William Baden Powell", correct: false },
            { text: "Henry Smyth", correct: false },
            { text: "Kenneth McLaren", correct: false }
        ]
    },
    {
        question: "Pekerjaan ayah Baden-Powell?",
        answers: [
            { text: "Dokter", correct: false },
            { text: "Pengusaha", correct: false },
            { text: "Guru Besar Geometri di Univ. Oxford", correct: true },
            { text: "Prajurit Militer", correct: false }
        ]
    },
    {
        question: "Siapakah nama ibu Baden-Powell?",
        answers: [
            { text: "Harriet Grace Smyth", correct: false },
            { text: "Henrietta Grace Smyth", correct: true },
            { text: "Helen Grace Smyth", correct: false },
            { text: "Hannah Grace Smyth", correct: false }
        ]
    },
    {
        question: "Siapakah nama ayah dari ibu Baden-Powell?",
        answers: [
            { text: "William T. Smyth", correct: true },
            { text: "Thomas A. Smyth", correct: false },
            { text: "Walter R. Smyth", correct: false },
            { text: "John H. Smyth", correct: false }
        ]
    },
    {
        question: "Siapakah nama saudara Baden-Powell?",
        answers: [
            { text: "Warrington, George, Augustus, Frank, Penrose, Agnes, Henrietta, Jessie, dan Baden Fletcher", correct: true },
            { text: "William, Robert, Thomas, Emily, Sarah, Charles, Jane, Elizabeth, dan Henry", correct: false },
            { text: "John, Mary, Richard, Lucy, Joseph, Emma, Samuel, Susan, dan Edward", correct: false },
            { text: "Daniel, Margaret, Michael, Catherine, Peter, Bridget, James, Bridget, dan Patrick", correct: false }
        ]
    },
    {
        question: "Tanggal berapakah ayah Baden-Powell meninggal?",
        answers: [
            { text: "5 Juni 1860", correct: false },
            { text: "11 Juni 1860", correct: true },
            { text: "15 Juni 1860", correct: false },
            { text: "20 Juni 1860", correct: false }
        ]
    },
    {
        question: "Apa julukan Baden-Powell semasa sekolah di Charterhouse?",
        answers: [
            { text: "Eagle Scout", correct: false },
            { text: "Pathfinder", correct: false },
            { text: "Bathing Towel", correct: true },
            { text: "Trailblazer", correct: false }
        ]
    },
    {
        question: "Siapakah yang membantu Baden-Powell masuk kemiliteran?",
        answers: [
            { text: "Lord Robert Cecil", correct: false },
            { text: "Pamannya Kol. Henry Smyth", correct: true },
            { text: "Kenneth McLaren", correct: false },
            { text: "Sir Francis Vane", correct: false }
        ]
    },
    {
        question: "Apa pangkat pamannya Baden-Powell saat Baden-Powell masuk militer?",
        answers: [
            { text: "Mayor", correct: false },
            { text: "Letnan Kolonel", correct: false },
            { text: "Komandan Royal Military Academy di Woolwich", correct: true },
            { text: "Jenderal", correct: false }
        ]
    },
    {
        question: "Di negara manakah Baden-Powell pertama kali ditempatkan setelah lulus di militer?",
        answers: [
            { text: "Afrika Selatan", correct: false },
            { text: "Australia", correct: false },
            { text: "India", correct: true },
            { text: "Canada", correct: false }
        ]
    },
    {
        question: "Apa pangkat Baden-Powell saat tugas di India?",
        answers: [
            { text: "Sersan", correct: false },
            { text: "Letnan", correct: false },
            { text: "Kapten", correct: false },
            { text: "Pembantu Letnan", correct: true }
        ]
    },
    {
        question: "Siapa sahabat dekat Baden-Powell?",
        answers: [
            { text: "Lord Kitchener", correct: false },
            { text: "Sir Winston Churchill", correct: false },
            { text: "Kenneth McLaren", correct: false },
            { text: "Kenneth McLaren", correct: true }
        ]
    },
    {
        question: "Apa julukan Baden-Powell yang diberikan oleh bangsa Zulu?",
        answers: [
            { text: "Pathfinder", correct: false },
            { text: "Trailblazer", correct: false },
            { text: "Impeesa", correct: true },
            { text: "Eagle Scout", correct: false }
        ]
    },
    {
        question: "Buku apa yang ditulis oleh Baden-Powell yang menjadi masterpiece?",
        answers: [
            { text: "The Scoutmaster's Handbook", correct: false },
            { text: "Aids to Scouting", correct: false },
            { text: "Scouting for Boys", correct: true },
            { text: "The Boy Scout Handbook", correct: false }
        ]
    },
    {
        question: "Siapakah istri Baden-Powell?",
        answers: [
            { text: "Agnes Baden-Powell", correct: false },
            { text: "Olave St. Clair Soames", correct: true },
            { text: "Edith Baden-Powell", correct: false },
            { text: "Grace Baden-Powell", correct: false }
        ]
    },
    {
        question: "Siapakah nama anak dari Baden-Powell?",
        answers: [
            { text: "William, Henry, Agnes", correct: false },
            { text: "Peter, Heather, Betty", correct: true },
            { text: "Robert, Elizabeth, James", correct: false },
            { text: "George, Emily, Frank", correct: false }
        ]
    },
    {
        question: "Pada tanggal berapa Baden-Powell dianugrahi gelar Lord?",
        answers: [
            { text: "1 Agustus 1920", correct: false },
            { text: "6 Agustus 1920", correct: true },
            { text: "11 Agustus 1920", correct: false },
            { text: "16 Agustus 1920", correct: false }
        ]
    },
    {
        question: "Pada tanggal berapa Baden-Powell mengunjungi Batavia (sekarang Jakarta)?",
        answers: [
            { text: "1 Desember 1934", correct: false },
            { text: "3 Desember 1934", correct: true },
            { text: "5 Desember 1934", correct: false },
            { text: "7 Desember 1934", correct: false }
        ]
    },
]

export default questions