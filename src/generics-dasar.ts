import type {Peserta} from './interfaces-dasar.js';

// SOAL 1 — Generic function
// Buat fungsi generic getLast<T>(arr: T[]): T | undefined
// yang mengembalikan elemen terakhir dari array apapun tipenya
function getLast<T>(arr: T[]): T | undefined{
    return arr[arr.length - 1];
}
const arr1 = [1, 2, 3];
const arr2 = ["halo", "nama", "saya", "zidan"];
console.log(getLast(arr1));
console.log(getLast(arr2));

// SOAL 2 — Generic function dengan 2 parameter
// Buat fungsi generic gabungkan<T, U>(a: T, b: U): T & U
// yang menggabungkan dua objek menjadi satu (gunakan spread operator)
function kombinasi<T, U>(a: T, b: U): T & U{
    return {...a, ...b};
}

const data1 = {
    "nama": "Zidan",
    "kelas": "XII PPLG 3"
};

const data2 = {
    "sekolah": "SMKN 5 Malang",
    "lokasi": "Jl. Ikan Piranha"
}

console.log(kombinasi(data1, data2));

// SOAL 3 — Generic interface
// Buat interface generic Wadah<T> dengan:
// - nilai: T
// - label: string
// Buat 3 instance dengan tipe berbeda: number, string, dan objek Peserta
interface Wadah<T> {
    nilai: T;
    label: string;
}

const botol: Wadah<number> = {
    nilai: 25,
    label: "Tinggi (Cm)",
}

const tempat: Wadah<string> = {
    nilai: "Waduk",
    label: "Wadah terbaik di kamar mandi"
}

const zidan: Peserta = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 1,
    nilaiAkhir: 100,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif"
}
const linda: Peserta = {
    id: 2,
    nama: "Linda Angelina",
    sekolah: "SMKN 5 Malang",
    fase: 1,
    nilaiAkhir: 100,
    github: "https://github.com/lindaangellina",
    status: "aktif"
}

const siswa_a: Wadah<Peserta> = {
    nilai: zidan,
    label: "Siswa",
}

console.log(botol);
console.log(tempat);
console.log(siswa_a);

// SOAL 4 — Generic class
// Buat class generic Riwayat<T> dengan:
// - private data: T[]
// - method tambah(item: T): void
// - method getSemua(): T[]
// - method getTerakhir(): T | undefined
// - getter jumlah: number
//
// Gunakan untuk membuat Riwayat<string> untuk menyimpan log aktivitas
class Riwayat<T> {
    constructor(private data: T[]) {}

    get jumlah(): number {
        return this.data.length;
    }

    tambah(item: T): void {
        this.data.push(item);
        return;
    }

    getSemua(): T[] {
        return this.data;
    }

    getTerakhir(): T | undefined {
        return this.data[this.data.length - 1];
    }
}

const allPeserta = [
    zidan,
    linda
]
const budi: Peserta = {
    id: 3,
    nama: "Budi",
    sekolah: "SMKN 5 Malang",
    fase: 1,
    nilaiAkhir: 100,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif"
}
const peserta = new Riwayat(allPeserta)
console.log(peserta.getSemua());
peserta.tambah(budi);
console.log(peserta.getSemua());
console.log(peserta.getTerakhir());
console.log(peserta.jumlah);