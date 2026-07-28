// STUDI KASUS: Sistem Pengelolaan Peserta Magang
//
// Gunakan semua yang sudah dipelajari Minggu 1-3:
// - Interface & type alias (Minggu 2)
// - Functions dengan berbagai parameter (Senin-Selasa)
// - Classes & Inheritance (Rabu)
// - Generics (Kamis)
// LANGKAH 1 — Base class
class Pengguna {
    constructor(nama, email, createdAt = new Date().toISOString()) {
        this.nama = nama;
        this.email = email;
        this.createdAt = createdAt;
    }
    info() {
        return `${this.nama} (${this.email})`;
    }
}
// LANGKAH 2 — Inheritance
class PesertaMagang extends Pengguna {
    constructor(nama, email, sekolah, fase = 1) {
        super(nama, email);
        this.sekolah = sekolah;
        this.fase = fase;
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    getRataRata() {
        if (this.nilaiList.length === 0)
            return 0;
        return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
    }
    info() {
        return `${super.info()} - ${this.sekolah}, Fase ${this.fase}`;
    }
}
function buatResponse(data, message = "OK") {
    return { success: true, data, message };
}
// LANGKAH 4 — Higher order function untuk filter & sort
function urutkanBerdasarkanNilai(peserta, urutan = "desc") {
    return [...peserta].sort((a, b) => {
        const diff = a.getRataRata() - b.getRataRata();
        return urutan === "asc" ? diff : -diff;
    });
}
// LANGKAH 5 — Implementasi
const ahmad = new PesertaMagang("Ahmad Romdadon", "ahmad12@gmail.com", "SMK 5 Malang", 1);
ahmad.tambahNilai(85);
ahmad.tambahNilai(90);
const zidan = new PesertaMagang("Zidan Alfa Permana", "zidanalfa18@gmail.com", "SMK 5 Malang", 1);
zidan.tambahNilai(92);
zidan.tambahNilai(95);
const semuaPeserta = [zidan, ahmad];
const terurut = urutkanBerdasarkanNilai(semuaPeserta, "desc");
const terurutasc = urutkanBerdasarkanNilai(semuaPeserta, "asc");
terurut.forEach((p) => {
    console.log(`${p.info()} - Rata-rata: ${p.getRataRata()}`);
});
terurutasc.forEach((p) => {
    console.log(`${p.info()} - Rata-rata: ${p.getRataRata()}`);
});
const response = buatResponse(terurut, "Data peserta berhasil dimuat");
const response1 = buatResponse(terurutasc, "Data peserta berhasil dimuat");
console.log(response);
console.log(response1);
export {};
//# sourceMappingURL=integrasi-minggu3.js.map