const smk5 = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    nilaiAkhir: 80,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif",
};
const smk5_1 = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
    status: "aktif"
};
const AllPeserta = [
    smk5,
    smk5_1
];
function cariPeserta(value) {
    if (value !== undefined && typeof value === "string") {
        return AllPeserta.find(peserta => peserta.nama === value);
    }
    if (value !== undefined && typeof value === "number") {
        return AllPeserta.find(peserta => peserta.id === value);
    }
    return undefined;
}
console.log(cariPeserta(0));
console.log(cariPeserta("Zidan Alfa Permana"));
// SOAL 2 — Rest parameters
// Buat fungsi hitungRataRata(...nilai: number[]): number
// yang mengembalikan rata-rata dari semua nilai yang diberikan
function hitungRataRata(...nilai) {
    if (nilai.length < 1) {
        return 0;
    }
    const total = nilai.reduce((total, n) => total + n, 0);
    return total / nilai.length;
}
console.log(hitungRataRata(1, 2, 3, 4, 5, 6, 7));
console.log(hitungRataRata(1, 10, 50));
console.log(hitungRataRata(1, 5, 10));
// SOAL 3 — Callback
// Buat fungsi urutkanPeserta(peserta: Peserta[], comparator: (a: Peserta, b: Peserta) => number): Peserta[]
// yang mengurutkan array peserta berdasarkan comparator yang diberikan
// Gunakan untuk urutkan berdasarkan nilai (ascending dan descending)
function urutkanPeserta(peserta, comparator) {
    return [...peserta].sort(comparator);
}
//asc
console.log(urutkanPeserta(AllPeserta, (a, b) => (a.id ?? 0) - (b.id ?? 0)));
//desc
console.log(urutkanPeserta(AllPeserta, (a, b) => (b.id ?? 0) - (a.id ?? 0)));
// SOAL 4 — Higher-order function
// Buat fungsi buatFilterNilai(minimal: number): (peserta: Peserta) => boolean
// yang mengembalikan fungsi filter untuk peserta dengan nilai >= minimal
// Gunakan dengan array.filter()
function buatFilterNilai(minimal) {
    return (peserta) => (peserta.nilaiAkhir ?? 0) >= minimal;
}
const filter = buatFilterNilai(80);
console.log(AllPeserta.filter(filter));
export {};
//# sourceMappingURL=functions-lanjutan.js.map