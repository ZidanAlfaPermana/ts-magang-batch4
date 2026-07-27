// SOAL 1 — Overloading
// Buat fungsi cariPeserta dengan overload:
// - cariPeserta(id: number): Peserta | undefined
// - cariPeserta(nama: string): Peserta | undefined
// Implementasikan logic pencarian berdasarkan id ATAU nama
import type {Peserta} from "./interfaces-dasar.js";

const smk5: Peserta = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    nilaiAkhir: 80,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif",
}
const smk5_1: Peserta = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
    status: "aktif"
}

const AllPeserta: Peserta[] = [
    smk5,
    smk5_1
]

function cariPeserta(id: number): Peserta | undefined;
function cariPeserta(nama: string): Peserta | undefined;
function cariPeserta(value: number | string): Peserta | undefined {
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
function hitungRataRata(...nilai: number[]): number {
    if (nilai.length < 1) {
        return 0;
    }
    const total: number = nilai.reduce((total: any, n: any) => total + n, 0);
    return total / nilai.length;
}
console.log(hitungRataRata(1, 2, 3, 4, 5, 6, 7));
console.log(hitungRataRata(1, 10, 50));
console.log(hitungRataRata(1, 5, 10));
// SOAL 3 — Callback
// Buat fungsi urutkanPeserta(peserta: Peserta[], comparator: (a: Peserta, b: Peserta) => number): Peserta[]
// yang mengurutkan array peserta berdasarkan comparator yang diberikan
// Gunakan untuk urutkan berdasarkan nilai (ascending dan descending)
function urutkanPeserta(peserta: Peserta[], comparator: (a: Peserta, b: Peserta) => number): Peserta[] {
    return [...peserta].sort(comparator);
}
//asc
console.log(urutkanPeserta(AllPeserta, (a, b) => (a.id ?? 0) - (b.id ?? 0)))

//desc
console.log(urutkanPeserta(AllPeserta, (a, b) => (b.id ?? 0) - (a.id ?? 0)))

// SOAL 4 — Higher-order function
// Buat fungsi buatFilterNilai(minimal: number): (peserta: Peserta) => boolean
// yang mengembalikan fungsi filter untuk peserta dengan nilai >= minimal
// Gunakan dengan array.filter()
function buatFilterNilai(minimal: number): (peserta: Peserta) => boolean {
    return (peserta: Peserta) => (peserta.nilaiAkhir ?? 0) >= minimal;
}

const filter = buatFilterNilai(80);
console.log(AllPeserta.filter(filter));