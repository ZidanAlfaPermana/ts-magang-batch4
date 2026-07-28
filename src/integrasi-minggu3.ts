// STUDI KASUS: Sistem Pengelolaan Peserta Magang
//
// Gunakan semua yang sudah dipelajari Minggu 1-3:
// - Interface & type alias (Minggu 2)
// - Functions dengan berbagai parameter (Senin-Selasa)
// - Classes & Inheritance (Rabu)
// - Generics (Kamis)

// LANGKAH 1 — Base class
class Pengguna {
    constructor(
        public nama: string,
        public email: string,
        protected createdAt: string = new Date().toISOString()
    ) {}

    info(): string {
        return `${this.nama} (${this.email})`;
    }
}

// LANGKAH 2 — Inheritance
class PesertaMagang extends Pengguna {
    private nilaiList: number[] = [];

    constructor(
        nama: string,
        email: string,
        public sekolah: string,
        public fase: number = 1
    ) {
        super(nama, email);
    }

    tambahNilai(nilai: number): void {
        this.nilaiList.push(nilai);
    }

    getRataRata(): number {
        if (this.nilaiList.length === 0) return 0;
        return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
    }

    info(): string {
        return `${super.info()} - ${this.sekolah}, Fase ${this.fase}`;
    }
}

// LANGKAH 3 — Generic wrapper untuk response
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}

function buatResponse<T>(data: T, message: string = "OK"): ApiResponse<T> {
    return { success: true, data, message };
}

// LANGKAH 4 — Higher order function untuk filter & sort
function urutkanBerdasarkanNilai(
    peserta: PesertaMagang[],
    urutan: "asc" | "desc" = "desc"
): PesertaMagang[] {
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