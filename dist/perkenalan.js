// src/perkenalan.ts
// Isi dengan data diri sendiri — jangan copy milik teman
const namaSaya = "Zidan Alfa Permana"; // ← isi nama kamu
const asalSekolah = "SMK 5 Malang"; // ← SMK 5 Malang atau SMK 6 Malang
// tambahan dari zidan
const apakahKota = true;
const kota = "Malang";
const sudahBelajarJavaScript = true; // atau false
const targetSelesaiMagang = 2027; // tahun target
// Buat fungsi perkenalan
function perkenalan(nama, sekolah, sudahJS, apakahKota, tahun, kota) {
    const statusJS = sudahJS ? "sudah" : "belum";
    const isCity = apakahKota ? "Kota" : "Kabupaten";
    return `Halo, Nama saya ${nama} dari ${sekolah}. Saya berasal dari ${isCity} ${kota}, Saya ${statusJS} belajar JavaScript sebelumnya. Dan target selesai magang saya adalah tahun ${tahun}`;
}
console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript, apakahKota, targetSelesaiMagang, kota));
export {};
//# sourceMappingURL=perkenalan.js.map