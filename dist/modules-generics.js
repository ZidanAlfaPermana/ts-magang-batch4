// SOAL 1 — Modules
// Buat file src/types/peserta.ts yang export:
// - interface Peserta (nama, sekolah, nilai)
// - type StatusPeserta = "aktif" | "lulus" | "berhenti"
//
// Buat file src/utils/validasi.ts yang export:
// - fungsi isNamaValid(nama: string): boolean (panjang minimal 3 karakter)
// - fungsi isNilaiValid(nilai: number): boolean (antara 0-100)
//
// Buat file src/index.ts yang import semua di atas
// dan gunakan untuk validasi 3 data peserta
// SOAL 2 — Generic function
// Buat fungsi generic getLast<T>(arr: T[]): T
// yang mengembalikan elemen terakhir dari array apapun tipenya
function getLast(arr) {
    return arr[arr.length - 1];
}
console.log(getLast(['Halo', 'nama', 'saya', 'zidan']));
const siswa_a = {
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    nilai: 100
};
const siswa_b = {
    nama: "Ahmad",
    sekolah: "SMKN 5 Malang",
    nilai: 75
};
const siswa_c = {
    nama: "Ri",
    sekolah: "SMKN 5 Malang",
    nilai: 120
};
const semuaSiswa = [
    siswa_a,
    siswa_b,
    siswa_c,
];
const peserta = {
    success: true,
    data: siswa_a,
    message: "data siswa berhasil diambil"
};
const somepeserta = {
    success: true,
    data: semuaSiswa,
    message: "semua data siswa berhasil diambil"
};
console.log(peserta);
console.log(somepeserta);
export {};
//# sourceMappingURL=modules-generics.js.map