// SOAL 1
// Buat abstract class Notifikasi dengan:
// - constructor(protected pesan: string)
// - abstract method kirim(): string
// - method biasa: log(): void yang mencetak "[LOG] Notifikasi dikirim"
//
// Buat 3 child class:
// - NotifikasiEmail (kirim() return "Email terkirim: [pesan]")
// - NotifikasiWhatsApp (kirim() return "WhatsApp terkirim: [pesan]")
// - NotifikasiPush (kirim() return "Push notification terkirim: [pesan]")
abstract class Notifikasi {
    constructor(protected pesan: string) {};

    abstract kirim(): string;

    log(): void {
        console.log("[LOG] Notifikasi dikirim");
    }
}

class NotifikasiEmail extends Notifikasi {
    constructor(pesan: string) {
        super(pesan);
    }
    kirim() {
        return `Email terkirim ${this.pesan}`;
    }
}

class NotifikasiWhatsapp extends Notifikasi {
    constructor(pesan: string) {
        super(pesan);
    }
    kirim() {
        return `Whatsapp terkirim ${this.pesan}`;
    }
}

class NotifikasiPush extends Notifikasi {
    constructor(pesan: string) {
        super(pesan);
    }
    kirim() {
        return `Push notifikasi terkirim ${this.pesan}`;
    }
}

const wa = new NotifikasiWhatsapp("Halo nama saya Zidan");
console.log(wa.kirim());
const email = new NotifikasiEmail("Halo nama saya Zidan Alfa");
console.log(email.kirim());
const push = new NotifikasiPush("Halo nama saya Zidan Alfa Permana");
console.log(push.kirim());

// SOAL 2
// Buat abstract class BentukGeometri dengan:
// - abstract method hitungLuas(): number
// - abstract method hitungKeliling(): number
// - method biasa: deskripsi(): string yang menampilkan luas dan keliling
//
// Buat 3 child class: Lingkaran, Persegi, Segitiga
// masing-masing dengan constructor dan implementasi luas/keliling yang sesuai

abstract class BentukGeometri {
    abstract hitungLuas(): number;
    abstract hitungKeliling(): number;
    deskripsi(): string {
        return `Luas Geometri: ${this.hitungLuas()}\nKeliling Geometri: ${this.hitungKeliling()}`;
    }
}

class Lingkaran extends BentukGeometri {
    constructor(private jari_jari: number) {
        super();
    }

    hitungLuas(): number {
        return Math.PI * (this.jari_jari ** 2);
    }

    hitungKeliling(): number {
        return 2 * Math.PI * this.jari_jari;
    }
}
const lingkaran = new Lingkaran(5);
console.log(`Keliling Lingkaran: ${lingkaran.hitungKeliling()}`);
console.log(`Luas Lingkaran: ${lingkaran.hitungLuas()}`);

class Persegi extends BentukGeometri {
    constructor(private sisi: number) {
        super();
    }

    hitungLuas(): number {
        return this.sisi * this.sisi;
    }

    hitungKeliling(): number {
        return 4 * this.sisi
    }
}
const persegi = new Persegi(10);
console.log(`Keliling Persegi: ${persegi.hitungKeliling()}`);
console.log(`Luas Persegi: ${persegi.hitungLuas()}`);

class Segitiga extends BentukGeometri {
    constructor(private alas: number, private tinggi: number, private sisi1: number, private sisi2: number, private sisi3: number) {
        super();
    }

    hitungLuas(): number {
        return 0.5 * this.alas * this.tinggi;
    }

    hitungKeliling(): number {
        return this.sisi1 + this.sisi2 + this.sisi3;
    }
}
const segitiga = new Segitiga(10, 5, 6, 7, 10);
console.log(`Keliling segitiga: ${segitiga.hitungKeliling()}`);
console.log(`Luas segitiga: ${segitiga.hitungLuas()}`);

// SOAL 3 — Konteks magang
// Buat abstract class TugasMagang dengan:
// - constructor(protected judul: string, protected deadline: string)
// - abstract method statusPengerjaan(): string
// - method biasa: info(): string
//
// Buat 2 child class:
// - TugasHarian (statusPengerjaan berdasarkan apakah sudah lewat 1 hari dari deadline)
// - TugasMingguan (statusPengerjaan berdasarkan apakah sudah lewat 1 minggu dari deadline)
abstract class TugasMaang {
    constructor(protected judul: string, protected deadline: string) {}

    abstract statusPengerjaan(): string;

    info(): string {
        return `Status Pengerjaan`;
    }
}

class TugasHarian extends TugasMaang {
    statusPengerjaan(): string {
        const date_deadline = Date.parse(this.deadline);
        if (Number.isNaN(date_deadline)) {
            return "Date tidak valid harus berupa YYYY-MM-DD"
        }
        return Date.now() > date_deadline ? `Tugas Harian ${this.judul}, Melebihi batas deadline` : `Tugas Harian ${this.judul}, Mengumpulkan tugas tepat waktu`;
    }
}

class TugasMingguan extends TugasMaang {
    statusPengerjaan(): string {
        const date_deadline = Date.parse(this.deadline);
        if (Number.isNaN(date_deadline)) {
            return "Date tidak valid harus berupa YYYY-MM-DD"
        }
        return Date.now() > date_deadline ? `Tugas Mingguan ${this.judul}, Melebihi batas deadline` : `Tugas Mingguan ${this.judul}, Mengumpulkan tugas tepat waktu`;
    }
}

const tugas1 = new TugasHarian("Membuat Plugin MTrims Pocketmine", "2026-07-30");
console.log(tugas1.statusPengerjaan());
const tugas2 = new TugasMingguan("Membuat Website Laravel", "2026-07-29");
console.log(tugas2.statusPengerjaan());
const tugas3 = new TugasHarian("Membuat Website Laravel", "2026-07-28");
console.log(tugas3.statusPengerjaan());
const tugas4 = new TugasHarian("Membuat Website Laravel", "awdadadw");
console.log(tugas4.statusPengerjaan());