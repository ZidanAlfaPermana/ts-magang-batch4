// STUDI KASUS: Sistem Penilaian Peserta Magang (versi OOP lengkap)

interface DapatDinilai {
    hitungNilaiAkhir(): number;
    getGrade(): string;
}

abstract class PesertaDasar implements DapatDinilai {
    private static totalPeserta: number = 0;
    protected _nilaiList: number[] = [];
    public readonly id: number;

    constructor(
        public nama: string,
        public sekolah: string
    ) {
        PesertaDasar.totalPeserta++;
        this.id = PesertaDasar.totalPeserta;
    }

    static getTotalPeserta(): number {
        return PesertaDasar.totalPeserta;
    }

    tambahNilai(nilai: number): void {
        if (nilai < 0 || nilai > 100) {
            console.log("Nilai harus antara 0-100");
            return;
        }
        this._nilaiList.push(nilai);
    }

    get rataRata(): number {
        if (this._nilaiList.length === 0) return 0;
        return this._nilaiList.reduce((a, b) => a + b, 0) / this._nilaiList.length;
    }

    // Abstract — beda cara hitung untuk tiap jenis peserta
    abstract hitungNilaiAkhir(): number;

    getGrade(): string {
        const nilai = this.hitungNilaiAkhir();
        if (nilai >= 90) return "A";
        if (nilai >= 75) return "B";
        if (nilai >= 60) return "C";
        return "D";
    }

    abstract getFaseMaksimal(): number;
}

class PesertaSMK5 extends PesertaDasar {
    hitungNilaiAkhir(): number {
        return this.rataRata; // sederhana, langsung rata-rata
    }

    getFaseMaksimal(): number {
        return 3;
    }
}

class PesertaSMK6 extends PesertaDasar {
    private bobotProject: number = 0.3;

    constructor(nama: string, sekolah: string) {
        super(nama, sekolah);
    }

    hitungNilaiAkhir(): number {
        // Bobot lebih kompleks: rata-rata + bonus dari project
        return this.rataRata * (1 - this.bobotProject) + (this.rataRata * this.bobotProject * 1.1);
    }

    getFaseMaksimal(): number {
        return 5;
    }
}

// Implementasi
const peserta: PesertaDasar[] = [
    new PesertaSMK5("Budi", "SMK 5 Malang"),
    new PesertaSMK6("Ajeng", "SMK 6 Malang"),
    new PesertaSMK6("Saidatul", "SMK 6 Malang"),
    new PesertaSMK5("Zidan", "SMK 5 Malang"),
    new PesertaSMK5("Linda", "SMK 5 Malang"),
];

// NOTE: harus "noUncheckedIndexedAccess": false jika ingin langsung mengambil data tanpa harus pengecekan, jika true maka harus diberi pengecekan apakah datanya kosong atau ada, karena jika tidak maka akan error TS2532: Object is possibly 'undefined'.
// "noUncheckedIndexedAccess": true
/*if (peserta[0] !== undefined && peserta[1] !== undefined && peserta[2] !== undefined) {
    peserta[0].tambahNilai(85);
    peserta[0].tambahNilai(88);
    peserta[1].tambahNilai(92);
    peserta[1].tambahNilai(95);
    peserta[2].tambahNilai(80);
    peserta[2].tambahNilai(85);
} else {
    console.log("data kosong")
}*/
// atau
peserta[0]?.tambahNilai(85);
peserta[0]?.tambahNilai(88);
peserta[1]?.tambahNilai(92);
peserta[1]?.tambahNilai(95);
peserta[2]?.tambahNilai(80);
peserta[2]?.tambahNilai(85);
peserta[3]?.tambahNilai(90);
peserta[3]?.tambahNilai(92);
peserta[4]?.tambahNilai(80);
peserta[4]?.tambahNilai(95);

// "noUncheckedIndexedAccess": false
/*peserta[0].tambahNilai(85);
peserta[0].tambahNilai(88);
peserta[1].tambahNilai(92);
peserta[1].tambahNilai(95);
peserta[2].tambahNilai(80);
peserta[2].tambahNilai(85);*/

peserta.forEach((p) => {
    console.log(`${p.nama} (${p.sekolah}) - Grade: ${p.getGrade()} - Nilai: ${p.hitungNilaiAkhir().toFixed(2)}`);
});

console.log(`Total peserta terdaftar: ${PesertaDasar.getTotalPeserta()}`);