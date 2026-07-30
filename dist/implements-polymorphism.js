class TugasHarian {
    hitungNilai() {
        return 1;
    }
    buatLaporan() {
        return "Laporan Hari Kamis tanggal 7/30/2026";
    }
}
const tugas = new TugasHarian();
console.log(tugas.hitungNilai());
console.log(tugas.buatLaporan());
class NotifikasiDasar {
}
class NotifikasiUrgent extends NotifikasiDasar {
    kirim() {
        return "Ini pesan urgent";
    }
    isValid() {
        return true;
    }
}
class NotifikasiBiasa extends NotifikasiDasar {
    kirim() {
        return "Ini pesan biasa, Hiraukan saja";
    }
    isValid() {
        return true;
    }
}
const urgent = new NotifikasiUrgent();
console.log(`Pesan: ${urgent.kirim()}\nis valid: ${urgent.isValid()}`);
const biasa = new NotifikasiBiasa();
console.log(`Pesan: ${biasa.kirim()}\nis valid: ${biasa.isValid()}`);
// SOAL 3 — Polymorphism
// Buat abstract class Laporan dengan abstract method generate(): string
// Buat 3 child class: LaporanHarian, LaporanMingguan, LaporanBulanan
// masing-masing dengan format generate() yang berbeda
//
// Buat array Laporan[] berisi ketiga jenis laporan
// Loop dan panggil generate() untuk masing-masing — amati polymorphism-nya
class Laporan {
}
class LaporanHarian extends Laporan {
    generate() {
        return "Laporan Hari Kamis";
    }
}
class LaporanMingguan extends Laporan {
    generate() {
        return "Laporan Minggu 2";
    }
}
class LaporanBulanan extends Laporan {
    generate() {
        return "Laporan Bulan Mei";
    }
}
function showReports(reports) {
    console.log(reports.generate());
}
const reports = [
    new LaporanBulanan(),
    new LaporanMingguan(),
    new LaporanHarian(),
];
reports.forEach(showReports);
export {};
//# sourceMappingURL=implements-polymorphism.js.map