import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Selamat Datang di PromptGen Suite! Apa ini?",
        answer: "PromptGen Suite adalah perangkat pra-produksi lengkap untuk pembuatan video AI. Anggap saja ini sebagai studio kreatif Anda sebelum menekan tombol 'render'. Tujuannya adalah untuk mengubah ide-ide Anda—tidak peduli seberapa kompleksnya—menjadi instruksi (prompt) yang sangat detail dan terstruktur. Dengan prompt yang baik, AI dapat menghasilkan video dan gambar yang jauh lebih akurat, konsisten, dan sesuai dengan visi sinematik Anda."
    },
    {
        question: "Langkah Pertama: Di mana saya harus memulai?",
        answer: "Langkah paling pertama dan terpenting adalah mengatur Kunci API Anda.\n\n1. Buka halaman **Pengaturan** (ikon gerigi).\n2. Masukkan Kunci API Google Gemini Anda. Anda bisa mendapatkannya dari Google AI Studio.\n3. Klik Simpan.\n\n**Mengapa ini penting?** Semua fitur cerdas di aplikasi ini—mulai dari analisis gambar hingga pembuatan prompt dan video—didukung oleh model AI canggih dari Google. Kunci API Anda adalah akses pribadi Anda untuk menggunakan teknologi tersebut. Kunci ini disimpan dengan aman di penyimpanan lokal browser Anda dan tidak pernah dibagikan."
    },
    {
        question: "Apa itu 'Aset' dan mengapa saya harus menggunakan Asset Builder?",
        answer: "Aset adalah blok bangunan yang dapat digunakan kembali untuk dunia cerita Anda: **Subjek, Objek, Lokasi, dan Aksi**.\n\n**Alur Kerja:** Anda menggunakan **Asset Builder** untuk membuat deskripsi yang sangat detail untuk setiap aset. Contoh: Anda bisa membuat aset 'Subjek' bernama 'Ksatria Bayangan' dengan deskripsi lengkap tentang baju zirah, bekas luka di wajahnya, dan tatapan matanya yang dingin.\n\n**Keuntungannya:**\n- **Konsistensi:** Karakter Anda akan terlihat sama di setiap adegan karena Anda menggunakan deskripsi yang sama persis.\n- **Efisiensi:** Tidak perlu menulis ulang deskripsi yang rumit. Cukup pilih aset dari menu dropdown di halaman pembuatan prompt.\n- **Dunia yang Kaya:** Memungkinkan Anda membangun sebuah perpustakaan karakter dan lokasi yang konsisten untuk proyek jangka panjang."
    },
    {
        question: "Bagaimana cara kerja Image Detector?",
        answer: "Image Detector adalah mata AI Anda. Ini adalah alat analisis visual yang kuat.\n\n**Alur Kerja:**\n1. Unggah gambar apa pun.\n2. AI akan menganalisis konten visualnya dan menulis deskripsi teks (prompt) yang mendetail, seolah-olah mendeskripsikan sebuah adegan film.\n3. **Fitur Unggulan:** Setelah prompt dibuat, Anda dapat secara otomatis **mengekstrak** informasi dari teks tersebut untuk membuat Aset baru. Jika Anda mengunggah foto seseorang, Anda bisa mengklik 'Jadikan Subjek', dan AI akan mengisi formulir Subjek Builder dengan detail yang diamatinya dari gambar."
    },
    {
        question: "Apa perbedaan antara semua mode pembuatan prompt?",
        answer: "Setiap mode dirancang untuk tujuan yang berbeda:\n\n- **Pencerita AI:** Titik awal termudah. Anda hanya memberikan **satu kalimat ide cerita**, dan AI akan secara otomatis menuliskan storyboard multi-adegan yang lengkap dengan deskripsi, tipe shot, dan gerakan kamera.\n\n- **Mode Manual:** Untuk membuat **satu adegan yang sangat kompleks**. Ini adalah pilihan Anda jika Anda ingin kontrol penuh atas setiap detail dalam satu shot: karakter utama, figuran, dialog, gerakan kamera yang spesifik, efek visual, pencahayaan, dll.\n\n- **One Stop Motion Shot:** Untuk membuat **urutan beberapa aksi sederhana** secara berurutan untuk satu karakter. Cocok untuk membuat prompt animasi langkah-demi-langkah, seperti 'karakter berjalan ke depan, lalu mengambil pedang, lalu mengangkatnya'.\n\n- **Storyboard by Image:** Mode canggih untuk **video multi-adegan yang sinematik berdasarkan gambar**. Anda membangun papan cerita visual dengan mengunggah gambar-gambar *keyframe*, dan AI membantu Anda mendeskripsikan, memodifikasi, dan menghubungkan setiap adegan menjadi satu narasi utuh.\n\n- **Penggabung Gambar:** Alat untuk **mengedit dan menggabungkan dua gambar**. Sempurna untuk melakukan *compositing* (misalnya, menempatkan karakter dari gambar A ke latar belakang gambar B), transfer gaya, atau melakukan *faceswap*.\n\n- **Video Fusion:** Untuk menciptakan **transisi video yang mulus dan sinematik** antara beberapa gambar. Anda menentukan titik awal dan akhir (gambar), dan AI akan menganimasikan 'perjalanan' visual di antara keduanya seolah-olah diambil dalam satu kali pengambilan gambar."
    },
    {
        question: "Bisakah Anda jelaskan alur kerja Storyboard by Image secara rinci?",
        answer: "Tentu. Ini adalah alur kerja sutradara film:\n\n1. **Unggah Keyframes:** Unggah serangkaian gambar yang mewakili momen-momen kunci (keyframes) dalam cerita Anda. Urutan unggahan Anda akan menjadi urutan adegan awal.\n\n2. **Hasilkan Deskripsi:** Untuk setiap gambar, klik 'Hasilkan Deskripsi'. AI akan menulis deskripsi adegan yang sinematik (bukan hanya 'seorang pria berdiri', tetapi 'wide shot seorang pria berdiri di tepi tebing saat senja'). Anda dapat mengedit teks ini sesuka hati.\n\n3. **Edit dengan AI & Kamera (Langkah Paling Kuat):** Buka editor untuk setiap panel untuk:\n    - **Memodifikasi Gambar:** Tulis prompt teks untuk mengubah gambar itu sendiri (misalnya, 'tambahkan hujan deras dan buat ekspresinya cemas').\n    - **Program Gerakan Kamera:** Gunakan slider untuk mengatur zoom, pan (geser), dan orbit (putar) kamera.\n    - **Hasilkan Panel Baru:** AI akan membuat gambar baru yang telah dimodifikasi dan menambahkannya sebagai panel baru di storyboard Anda. Ini memungkinkan Anda membangun urutan animasi yang sangat kompleks.\n\n4. **Gabungkan menjadi Prompt Akhir:** Setelah semua panel Anda siap, klik 'Hasilkan Prompt Gabungan'. AI akan merangkai semua deskripsi dan gerakan kamera menjadi satu naskah video yang koheren dan mengalir, lengkap dengan bahasa transisi ('kemudian adegan beralih ke...'). Naskah akhir inilah yang Anda kirim ke Video Generator."
    },
    {
        question: "Apa fungsi Bank Prompt?",
        answer: "Bank Prompt lebih dari sekadar tempat menyimpan teks. Setiap kali Anda menyimpan sebuah prompt, aplikasi ini juga menyimpan **seluruh konfigurasi dan pengaturan** dari halaman tempat Anda membuatnya.\n\n**Keuntungannya:** Anda dapat mengklik 'Muat' pada prompt lama, dan aplikasi akan membawa Anda kembali ke halaman generator yang sesuai (misalnya, Mode Manual) dan secara otomatis mengisi semua formulir, pilihan karakter, dan pengaturan kamera persis seperti saat Anda menyimpannya. Ini sangat berguna untuk melanjutkan pekerjaan, membuat variasi, atau menggunakan kembali templat yang kompleks."
    },
    {
        question: "Apa fungsi halaman Video Generator?",
        answer: "Ini adalah **tahap akhir** dari seluruh proses. Semua halaman lain bertugas untuk *mempersiapkan* prompt. Halaman Video Generator bertugas untuk *mengeksekusinya*.\n\n**Alur Kerja:** Anda membawa sebuah prompt ke halaman ini (baik dengan menyalin-tempel, atau dikirim secara otomatis dari halaman lain). Di sini, Anda dapat melakukan penyesuaian akhir seperti aspek rasio dan kualitas, lalu klik 'Hasilkan Video'. Aplikasi akan mengirimkan instruksi akhir Anda ke model video VEO untuk membuat video final.\n\n**Fitur Lanjutan:** Tombol 'Lanjutkan Cerita' memungkinkan Anda mengambil frame terakhir dari video yang baru saja dibuat dan menggunakannya sebagai gambar awal untuk prompt Anda berikutnya, menciptakan alur kerja pembuatan cerita visual yang berkelanjutan."
    }
];

const FaqItem: React.FC<{ item: { question: string, answer: string }, isOpen: boolean, onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={onToggle}
                className="w-full text-left py-4 px-2 flex justify-between items-center text-lg text-white hover:bg-gray-700/50 focus:outline-none"
            >
                <span className="font-semibold">{item.question}</span>
                <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="p-4 bg-gray-900/50">
                    <p className="text-gray-300 whitespace-pre-line">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};


const HelpPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Bantuan & Panduan Pengguna ❓</h2>
            <div className="bg-gray-700 rounded-lg shadow-inner">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HelpPage;