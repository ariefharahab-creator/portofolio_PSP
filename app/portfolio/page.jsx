<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Digital Ukom - Arief Rahman Harahab</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body class="bg-[#F4F6F0] text-[#2C3E2B] antialiased">

    <div id="root"></div>

    <script type="text/babel">
        const { useState } = React;

        // SVG Icons Internal
        const IconLayers = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
        const IconDroplet = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>;
        const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
        const IconEye = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
        const IconFileText = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>;
        const IconCode = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
        const IconFolder = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>;
        const IconExternalLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;

        function PortfolioUkom() {
            const [activeGrid, setActiveGrid] = useState(null);

            const gridData = [
                {
                    id: 'lahan',
                    title: 'Perlindungan & Penyediaan Lahan',
                    sub: 'Regulasi Ahli Madya: Evaluasi Kebijakan Makro & Spasial LP2B',
                    icon: <IconLayers />,
                    sawahGuard: 'Si-Wanasari (Sistem Monitoring Alih Fungsi Lahan Wanasari)',
                    techStack: 'Google Earth Engine, Sentinel-1 & Sentinel-2, GitHub, Vercel',
                    kajian: 'Laporan Audit Spasial & Kajian Kerentanan Alih Fungsi Lahan Pertanian Kabupaten (Komparasi Temporal 2020-2026).',
                    dokumentasi: 'Peta spasial poligon penyusutan sawah hijau (red zone) & Ground-truthing batas patok LP2B daerah Brebes/Kendal.',
                    dataDukung: ['Skrip Otomasi GEE (GitHub Repo)', 'SK Tim Terpadu Pengawasan Lahan Dinas', 'Data Spasial SHP Geodatabase LP2B Daerah']
                },
                {
                    id: 'irigasi',
                    title: 'Pengembangan & Rehabilitasi Irigasi',
                    sub: 'Regulasi Ahli Madya: Manajemen Kecukupan Debit & Adaptasi Iklim',
                    icon: <IconDroplet />,
                    sawahGuard: 'Semar Gotok Lemah - Water Management Node',
                    techStack: 'ESP32 Hardware, Sensor Ultrasonik Air, DHT22 Probe, Cloud Dashboard',
                    kajian: 'Kajian Teknis Evaluasi Efisiensi Distribusi Air Saluran Tersier Berbasis IoT untuk Mitigasi Kekeringan Krisis Vegetatif Padi.',
                    dokumentasi: 'Foto perakitan boks sensor kedap air & grafik fluktuasi level air real-time di Panti Aisyiyah Botomulyo.',
                    dataDukung: ['Logbook Sinkronisasi Server Cloud Node', 'Peta Jaringan Irigasi Tersier Wilayah Kerja', 'Skema Rangkaian Elektronik Perangkat Hardware']
                },
                {
                    id: 'pupuk',
                    title: 'Pengelolaan & Pengawasan Pupuk',
                    sub: 'Regulasi Ahli Madya: Rekomendasi Pemulihan Kesuburan Tanah Makro',
                    icon: <IconShield />,
                    sawahGuard: 'Semar Gotok Lemah - Soil Health Monitor & Biochar Recovery',
                    techStack: 'Double Barrel Retort Furnace, Sensor pH Tanah Presisi, IoT Analytics',
                    kajian: 'Evaluasi Makro Degradasi pH Tanah Lahan Kritis dan Konsep Rencana Aksi Pemulihan Kesuburan Lahan Melalui Pemanfaatan Biochar.',
                    dokumentasi: 'Operasional pembakaran Tungku Double Barrel Retort & visualisasi perbaikan tren parameter pH tanah di AgroEduLabs Center.',
                    dataDukung: ['Logbook Dampak Produksi Biochar Bengkel Kedaulatan', 'Data Spasial Alokasi Kuota e-RDKK Pupuk Bersubsidi', 'Hasil Analisis Lab Tanah Pra & Pasca Aplikasi Biochar']
                },
                {
                    id: 'pestisida',
                    title: 'Pengendalian & Pengawasan Pestisida',
                    sub: 'Regulasi Ahli Madya: Analisis Algoritma Sistem Peringatan Dini OPT',
                    icon: <IconEye />,
                    sawahGuard: 'PADI Command Center - OPT Early Warning System',
                    techStack: 'Analis Iklim Mikro, Sensor DHT22 Node, Pemodelan Prediksi Hama',
                    kajian: 'Konsep Rencana Strategis Sistem Peringatan Dini Ledakan Hama Berbasis Iklim Mikro Guna Meminimalisir Residu Pestisida Kimia.',
                    dokumentasi: 'Tangkapan layar Notifikasi Otomatis (Alert System) cuaca kritis pemicu jamur/wereng pada dashboard utama PADI Command Center.',
                    dataDukung: ['Data Histori Serangan Mingguan POPT Kecamatan', 'Sertifikat Laboratorium Pengembangan Agen Hayati AgroEduLabs', 'Matriks Korelasi Cuaca Mikro BMKG Daerah']
                },
                {
                    id: 'pembiayaan',
                    title: 'Pembiayaan Pertanian',
                    sub: 'Regulasi Ahli Madya: Kajian Akuntabilitas Finansial & Sirkular Tani',
                    icon: <IconFileText />,
                    sawahGuard: 'PSP War Room Center - Financial Audit Integrator',
                    techStack: 'Data Overlay Systems, FinTech Tracking, Digital Ledger Platform',
                    kajian: 'Kajian Model Sirkular Ekonomi dan Akuntabilitas Penyaluran Kredit Mikro Tani Berbasis Validasi Data Spasial Sawah.',
                    dokumentasi: 'Bagan Rantai Nilai (Value Chain) AgroEduLabs & infografis perputaran modal logistik berbasis filosofi Manajemen 7 Musim.',
                    dataDukung: ['Modul Manajemen Logistik & Literasi Finansial Tani', 'Profil Kelembagaan Taruna Tani Binaan Komunitas', 'Draf Instrumen Evaluasi Ketepatan KUR & AUTP Kabupaten']
                }
            ];

            return (
                <div className="min-h-screen bg-[#F4F6F0] text-[#2C3E2B] font-sans antialiased">
                    <header className="border-b border-[#D1D7C4] bg-[#EAEFE0] sticky top-0 z-50 bg-opacity-90">
                        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <span className="text-xs font-mono font-semibold tracking-widest text-emerald-700 uppercase block">Workspace Portofolio Digital Ukom</span>
                                <h1 className="text-2xl font-bold tracking-tight text-[#1A2A1A] mt-1">Arief Rahman Harahab</h1>
                                <p className="text-sm text-emerald-850 mt-0.5">Analis Prasarana dan Sarana Pertanian Ahli Muda — Dinas Pertanian</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[#2C3E2B] text-white text-xs font-mono rounded-md shadow-sm">Mode: Marbot Inovator</span>
                                <span className="px-3 py-1 bg-emerald-700 text-white text-xs font-mono rounded-md shadow-sm">Target: Ahli Madya</span>
                            </div>
                        </div>
                    </header>

                    <main className="max-w-6xl mx-auto px-6 py-10">
                        <section className="mb-10 p-6 bg-[#EAEFE0] rounded-xl border border-[#D1D7C4] shadow-sm">
                            <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-[#1A2A1A] mb-2">Manifesto Kerja: The Quiet Architect</h2>
                            <p className="text-sm text-emerald-900 leading-relaxed max-w-5xl">
                                Seluruh data mentah dan rekayasa instrumen teknologi yang dibangun dalam ekosistem ini diotomasi untuk menghilangkan redundansi input lapangan (Kompetensi Ahli Muda). Pada portofolio ini, agregasi data tersebut dievaluasi ke dalam skala makro wilayah guna menyusun draf konsep kebijakan taktis prasarana (Syarat Ahli Madya) demi mewujudkan kedaulatan pertanian yang berakar, bergerak, dan berarti.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                            <div className={`${activeGrid ? 'lg:col-span-2' : 'lg:col-span-5'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 transition-all duration-300`}>
                                {gridData.map((grid) => (
                                    <button
                                        key={grid.id}
                                        onClick={() => setActiveGrid(grid)}
                                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                                            activeGrid?.id === grid.id
                                                ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700'
                                                : 'bg-[#EAEFE0] border-[#D1D7C4] hover:bg-white hover:border-emerald-600 shadow-sm'
                                        }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-[#F4F6F0] rounded-lg border border-[#D1D7C4] text-emerald-700">
                                                {grid.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-[#1A2A1A] text-base leading-snug truncate">{grid.title}</h3>
                                                <p className="text-xs text-emerald-800 font-mono mt-1 line-clamp-2">{grid.sub}</p>
                                                <div className="mt-3 flex items-center text-xs font-semibold text-emerald-700">
                                                    Buka Komponen Grid <IconExternalLink />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {activeGrid && (
                                <div className="lg:col-span-3 bg-white border border-[#D1D7C4] rounded-xl p-6 shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-start border-b border-[#F4F6F0] pb-4 mb-6">
                                        <div>
                                            <span className="text-xs font-mono font-bold uppercase text-emerald-700">Data Grid Terintegrasi</span>
                                            <h2 className="text-xl font-bold text-[#1A2A1A] mt-0.5">{activeGrid.title}</h2>
                                        </div>
                                        <button 
                                            onClick={() => setActiveGrid(null)}
                                            className="text-xs px-3 py-1.5 bg-[#F4F6F0] hover:bg-[#EAEFE0] rounded border border-[#D1D7C4] transition-colors font-medium"
                                        >
                                            Tutup Detail
                                        </button>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 text-emerald-900">
                                            <IconCode />
                                            <h4 className="text-xs font-mono font-bold tracking-wide uppercase">1. Sawah Guard (Sistem Pemantau & Proteksi)</h4>
                                        </div>
                                        <div className="bg-[#F4F6F0] border border-[#D1D7C4] p-4 rounded-lg">
                                            <p className="text-sm font-bold text-[#1A2A1A]">{activeGrid.sawahGuard}</p>
                                            <p className="text-xs text-emerald-800 font-mono mt-1.5 bg-white/60 inline-block px-2 py-0.5 rounded border border-[#E1E7D5]">
                                                Tech Stack: {activeGrid.techStack}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 text-emerald-900">
                                            <IconFileText />
                                            <h4 className="text-xs font-mono font-bold tracking-wide uppercase">2. Kompilasi Laporan (Bahan Kajian Evaluatif)</h4>
                                        </div>
                                        <div className="bg-[#F4F6F0] border border-[#D1D7C4] p-4 rounded-lg">
                                            <p className="text-sm italic text-emerald-950 font-medium leading-relaxed">
                                                "{activeGrid.kajian}"
                                            </p>
                                            <div className="mt-3 text-[11px] font-mono font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded inline-flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 block"></span>
                                                Output: Usulan Draf Kebijakan Strategis Tingkat Kabupaten
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2 text-emerald-900">
                                            <IconFolder />
                                            <h4 className="text-xs font-mono font-bold tracking-wide uppercase">3. Visualisasi & Bukti Dokumentasi Fisik</h4>
                                        </div>
                                        <div className="bg-[#F4F6F0] border border-[#D1D7C4] p-4 rounded-lg">
                                            <p className="text-sm text-[#2C3E2B] leading-relaxed">{activeGrid.dokumentasi}</p>
                                            <div className="mt-2.5 text-[11px] text-emerald-700 font-mono flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span> 
                                                Log media & visualisasi koordinat terhubung ke Vercel Cloud Server
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-mono font-bold tracking-wide uppercase text-emerald-900 mb-2">4. Lampiran Legalitas & Data Dukung Utama</h4>
                                        <ul className="space-y-2">
                                            {activeGrid.dataDukung.map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm text-emerald-950 bg-[#F4F6F0] px-3 py-2.5 rounded border border-[#E1E7D5]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0"></span>
                                                    <span className="truncate">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>

                    <footer className="mt-24 border-t border-[#D1D7C4] py-6 bg-[#EAEFE0] text-center text-xs text-emerald-800 font-mono">
                        <p>© 2026 OYOD Brand / AgroEduLabs Ecosystem. Dikembangkan khusus untuk Instrumen Uji Kompetensi Jabfung Analis PSP.</p>
                    </footer>
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<PortfolioUkom />);
    </script>
</body>
</html>
