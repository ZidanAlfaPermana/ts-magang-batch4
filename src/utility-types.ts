// Gunakan interface ini sebagai dasar:
interface JurnalHarian {
    id: number;
    pesertaId: number;
    tanggal: string;
    kegiatan: string;
    hambatan: string;
    rencanaBesok: string;
    linkCommit: string;
    statusReview: "belum" | "sudah";
}

// SOAL 1 — Partial
// Buat type JurnalUpdate menggunakan Partial
// Buat fungsi updateJurnal(id: number, data: JurnalUpdate): void
// Test dengan update hanya field statusReview
type JurnalUpdate = Partial<JurnalHarian>;

function updateJurnal(id: number, data: JurnalUpdate) {
    console.log(`data statusRiview berhasil di update dengan ID: ${id}\n`, data);
}

const jurnal1: JurnalUpdate = {
    id: 1,
    pesertaId: 1,
    tanggal: 'Horror',
    kegiatan: 'Psychological Horror',
    hambatan: 'Killer',
    rencanaBesok: 'Psychological Horror',
    linkCommit: 'Horror',
    statusReview: "belum",
}

updateJurnal(1, {statusReview: "sudah"});
// SOAL 2 — Omit
// Buat type JurnalBaru = data jurnal tanpa id dan tanpa statusReview
// (karena id auto-generate dan status default "belum")
// Buat fungsi buatJurnal(data: JurnalBaru): JurnalHarian
type JurnalBaru = Omit<JurnalHarian, "statusReview" | "id">
function buatJurnal(data: JurnalBaru): JurnalHarian {
    return {
        id: Math.random(),
        ...data,
        statusReview: "belum"
    }
}

console.log(buatJurnal({
    pesertaId: 1,
    tanggal: 'Horror',
    kegiatan: 'Psychological Horror',
    hambatan: 'Killer',
    rencanaBesok: 'Psychological Horror',
    linkCommit: 'Horror',
}));

// SOAL 3 — Pick
// Buat type JurnalRingkas yang hanya berisi: id, tanggal, kegiatan
// Buat fungsi getRingkasan(jurnal: JurnalHarian): JurnalRingkas
type JurnalRingkas = Pick<JurnalHarian, "id" | "tanggal" | "kegiatan">

const jurnal: JurnalHarian = {
    id: 1,
    pesertaId: 1,
    tanggal: "2020-06-20",
    kegiatan: "Membuat project laravel",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://zidanalfapermana.github.io/",
    statusReview: "belum",
}
function getRingkasan(jurnal: JurnalHarian): JurnalRingkas {
    return {
        id: jurnal.id,
        tanggal: jurnal.tanggal,
        kegiatan: jurnal.kegiatan,
    }
}

console.log(getRingkasan(jurnal));
// SOAL 4 — Record
// Buat type Fase = "fase1" | "fase2" | "fase3" | "fase4" | "fase5"
// Buat const durasiFase: Record<Fase, number> yang berisi durasi minggu tiap fase
// Buat const namaFase: Record<Fase, string> yang berisi nama lengkap tiap fase
type fase = "fase1" | "fase2" | "fase3" | "fase4" | "fase5";
const durasiFase: Record<fase, number> = {
    fase1: 2,
    fase2: 2,
    fase3: 3,
    fase4: 1,
    fase5: 3
}
const namaFase: Record<fase, string> = {
    fase1: "Zidan Alfa Permana",
    fase2: "Budi Binusi",
    fase3: "Lani lastani",
    fase4: "Jasir Kani",
    fase5: "Juliri Kani",
}
console.log(namaFase);
console.log(durasiFase);

// SOAL 5 — Kombinasi
// Buat type JurnalAman = semua field jurnal jadi optional, KECUALI id dibuang
// (gunakan kombinasi Partial dan Omit)
type JurnalAman = Partial<Omit<JurnalHarian, 'id'>>
const jurnalku: JurnalAman = {
    pesertaId: 1,
    tanggal: "2020-06-20",
    kegiatan: "Membuat project laravel",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://zidanalfapermana.github.io/",
    statusReview: "belum",
}
console.log(jurnalku);