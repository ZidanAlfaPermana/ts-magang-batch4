// SOAL 1
// Buat class SprintTask dengan:
// - static property: totalTask (number, mulai dari 0)
// - constructor yang menaikkan totalTask setiap kali instance baru dibuat
// - static method getTotalTask(): number
// Buat 5 instance dan tampilkan totalnya
class SprintTask {
    static totalTask: number = 0;
    constructor() {
        SprintTask.totalTask++;
    }

    static getTotalTask(): number {
        return SprintTask.totalTask;
    }
}
const a = new SprintTask();
console.log(SprintTask.getTotalTask());
const b = new SprintTask();
console.log(SprintTask.getTotalTask());
const c = new SprintTask();
console.log(SprintTask.getTotalTask());
const d = new SprintTask();
console.log(SprintTask.getTotalTask());
const e = new SprintTask();
console.log(SprintTask.getTotalTask());

// SOAL 2
// Buat class AppConfig dengan static readonly:
// - APP_NAME: "SiTrack"
// - VERSION: "1.0.0"
// - MAX_PESERTA: 4
// Buat static method getInfo(): string yang menampilkan semua config di atas
class AppConfig {
    static readonly APP_NAME: string = "SiTrack";
    static readonly VERSION: string = "1.0.0";
    static readonly MAX_PESERTA: number = 4;

    static getInfo(): string {
        return `AppName: ${AppConfig.APP_NAME}\nVersion: ${AppConfig.VERSION}\nMaxPeserta: ${AppConfig.MAX_PESERTA}`;
    }
}

console.log(AppConfig.getInfo());

// SOAL 3 — Static factory
// Buat class Nilai dengan private constructor
// Buat static method buat(nilai: number): Nilai | null
// yang mengembalikan null jika nilai di luar rentang 0-100
// Tambahkan method getNilai(): number untuk instance yang berhasil dibuat
class Nilai {
    private constructor(private nilai: number) {}

    static buat(nilai: number): Nilai | null {
        return nilai >= 0 && nilai <= 100 ? new Nilai(nilai) : null
    }

    getNilai(): number {
        return this.nilai;
    }
}
const nilai1 = Nilai.buat(10);
const nilai2 = Nilai.buat(0);


// SOAL 4 — Static utility
// Buat class StringHelper dengan static methods:
// - capitalize(str: string): string
// - slugify(str: string): string (ubah ke lowercase, spasi jadi tanda -)
// - truncate(str: string, maxLength: number): string (potong + tambah "...")
class StringHelper {
    static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static slugify(str: string): string {
        return str.toLowerCase().replace(/ /g, "-")
    }

    static truncate(str: string, maxLength: number): string {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    }
}

console.log(StringHelper.capitalize("halo nama saya zidan"));
console.log(StringHelper.slugify("Saya adalah Laravel Full Stack developer"));
console.log(StringHelper.truncate("Saya merupakan siswa SMKN 5 Malang", 10))