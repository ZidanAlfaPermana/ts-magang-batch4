"use strict";
// SOAL 1
// Buat variabel untuk menyimpan data nilai rapor:
// nama (string), kelas (string), nilaiTS (number), nilaiJS (number), lulus (boolean)
// Hitung rata-rata nilai dan tentukan apakah lulus (>= 75)
// Tampilkan hasilnya dengan console.log
Object.defineProperty(exports, "__esModule", { value: true });
// array yang dinamis/bisa di ubah" sesuai keinginan
let raport = {
    nama: "Zidan Alfa Permana",
    kelas: "XII PPLG 3",
    nilaiTS: 85,
    nilaiJS: 80,
    lulus: true
};
// jika ingin mengganti data di rapot tanpa harus mengganti variabel awalnya
// raport.kelas = "XI PPLG 3" // jika memilih variable enum/array yang tidak bisa dirubah, maka penambahan data disini tidak bisa atau error
// untuk debugging
//console.log(raport);
//fungsi perhitungan rata" dan penentuan lulusnya atau tidaknya
function apakahLulus(number1, number2) {
    const average = (number1 + number2) / 2;
    if (average >= 75) {
        return `nilai mu ${average}. Wow kamu lulus`;
    }
    return `nilai mu ${average} wah nilai kamu dibawah kkm, kamu tidak lulus`;
}
console.log(apakahLulus(raport.nilaiJS, raport.nilaiTS));
// SOAL 2
// Buat enum Prioritas dengan nilai: Rendah, Sedang, Tinggi
// Buat array of tuple: [string, Prioritas][] untuk menyimpan daftar tugas
// Contoh: [["Setup TypeScript", Prioritas.Tinggi], ["Baca dokumentasi", Prioritas.Sedang]]
// Tampilkan semua tugas dengan prioritasnya
var PRIORITY;
(function (PRIORITY) {
    PRIORITY["rendah"] = "Rendah";
    PRIORITY["sedang"] = "Sedang";
    PRIORITY["tinggi"] = "Tinggi";
})(PRIORITY || (PRIORITY = {}));
const tugas = [
    ["Setup Project Laravel", PRIORITY.tinggi],
    ["Membuat Project Livewire", PRIORITY.sedang],
    ["Melihat Vid Docs di Laracasts", PRIORITY.sedang],
    ["Membaca Docs di Web Laravel", PRIORITY.rendah],
];
console.log(tugas);
// SOAL 3 (bonus)
// Buat fungsi hitungDiskon(harga: number, diskon: number | string): number
// Jika diskon adalah number → anggap sebagai persentase (misal: 10 = 10%)
// Jika diskon adalah string → anggap sebagai kode kupon:
//   "MAGANG10" → diskon 10%
//   "NAWASENA20" → diskon 20%
//   kode lain → tidak ada diskon (0%)
// Return harga setelah diskon
function hitungDiskon(harga, diskon) {
    const KODE_KUPON = {
        "MAGANG10": 10,
        "NAWASENA20": 20
    };
    if (typeof diskon === "string") {
        const cek = KODE_KUPON[diskon];
        if (cek !== undefined) {
            const diskon_akhir = harga * (cek / 100);
            return harga - diskon_akhir;
        }
        return harga;
    }
    if (diskon < 1 && diskon > 100) {
        return harga;
    }
    const diskon_akhir = harga * (Number(diskon) / 100);
    const harga_akhir = harga - diskon_akhir;
    return Number(harga_akhir);
}
console.log("RP. " + hitungDiskon(50000, "NAWASENA20"));
//# sourceMappingURL=latihan-jumat.js.map