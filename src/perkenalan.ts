// src/perkenalan.ts
// Isi dengan data diri sendiri — jangan copy milik teman

const namaSaya: string = "Zidan Alfa Permana"; // ← isi nama kamu
const asalSekolah: string = "SMK 5 Malang"; // ← SMK 5 Malang atau SMK 6 Malang

// Additional from zidan
const apakahKota = true;

const kota: string = "Malang";
const sudahBelajarJavaScript: boolean = true; // atau false
const targetSelesaiMagang: number = 2027; // tahun target

// Buat fungsi perkenalan
function perkenalan(
    nama: string,
    sekolah: string,
    sudahJS: boolean,
    apakahKota: boolean,
    tahun: number,
    kota: string,
): string {
    const statusJS = sudahJS ? "sudah" : "belum";
    const isCity = apakahKota ? "Kota" : "Kabupaten";
    return `Halo, Nama saya ${nama} dari ${sekolah}. Saya berasal dari ${isCity} ${kota}, Saya ${statusJS} belajar JavaScript sebelumnya. Dan target selesai magang saya adalah tahun ${tahun}`;
}

console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript, apakahKota, targetSelesaiMagang, kota));