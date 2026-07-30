// SOAL 1
// Buat interface BisaDinilai dengan:
// - method hitungNilai(): number
//
// Buat interface BisaDilaporkan dengan:
// - method buatLaporan(): string
//
// Buat class TugasHarian yang implements KEDUA interface tersebut
interface BisaDinilai {
    hitungNilai(): number;
}

interface BisaDilaporkan {
    buatLaporan(): string;
}

class TugasHarian implements BisaDinilai, BisaDilaporkan {
    hitungNilai(): number {
        return 1;
    }

    buatLaporan(): string {
        return "Laporan Hari Kamis tanggal 7/30/2026";
    }
}
const tugas = new TugasHarian();
console.log(tugas.hitungNilai());
console.log(tugas.buatLaporan());

// SOAL 2
// Buat abstract class NotifikasiDasar implements DapatDiverifikasi
// (buat juga interface DapatDiverifikasi dengan method isValid(): boolean)
// dengan abstract method kirim(): string
//
// Buat 2 child class: NotifikasiUrgent dan NotifikasiBiasa
// yang masing-masing override kirim() dan isValid()
interface DapatDiverifikasi {
    isValid(): boolean;
}
abstract class NotifikasiDasar implements DapatDiverifikasi {
    abstract isValid(): boolean;
    abstract kirim(): string;
}

class NotifikasiUrgent extends NotifikasiDasar {
    kirim(): string {
        return "Ini pesan urgent";
    }

    isValid(): boolean {
        return true;
    }
}
class NotifikasiBiasa extends NotifikasiDasar {
    kirim(): string {
        return "Ini pesan biasa, Hiraukan saja";
    }

    isValid(): boolean {
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
abstract class Laporan {
    abstract generate(): string;
}

class LaporanHarian extends Laporan {
    generate(): string {
        return "Laporan Hari Kamis";
    }
}

class LaporanMingguan extends Laporan {
    generate(): string {
        return "Laporan Minggu 2";
    }
}

class LaporanBulanan extends Laporan {
    generate(): string {
        return "Laporan Bulan Mei";
    }
}

function showReports(reports: Laporan) {
    console.log(reports.generate());
}

const reports = [
    new LaporanBulanan(),
    new LaporanMingguan(),
    new LaporanHarian(),
]

reports.forEach(showReports);