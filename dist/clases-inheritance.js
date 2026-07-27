"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SOAL 1 — Class dasar
// Buat class Mentor dengan:
// - Properties: nama (public), keahlian (public, array string)
// - Constructor menerima nama dan keahlian
// - Method tambahKeahlian(skill: string): void
// - Method getInfo(): string → "nama - keahlian: skill1, skill2, ..."
class Mentor {
    constructor(name, keahlian) {
        this.nama = name;
        this.keahlian = keahlian;
    }
    tambahKeahlian(skill) {
        this.keahlian.push(skill);
    }
    getInfo() {
        return `${this.nama} - keahlian: ${this.keahlian.join(', ')}`;
    }
}
const mentor = new Mentor("Zidan", ["Laravel Full Stack Developer", "Pocketmine-MP Plugin Developer"]);
mentor.tambahKeahlian("Frontend Developer");
console.log(mentor.getInfo());
// SOAL 2 — Access modifiers
// Buat class Nilai dengan:
// - private list: number[] = []
// - Method tambah(n: number): void
// - Method rataRata(): number
// - Method tertinggi(): number
// Pastikan property list tidak bisa diakses langsung dari luar class
class Nilai {
    constructor(list = []) {
        this.list = list;
    }
    tambah(n) {
        this.list.push(n);
    }
    rataRata() {
        return this.list.reduce((sum, current) => sum + current, 0) / this.list.length;
    }
    tertinggi() {
        return Math.max(...this.list);
    }
}
const nilai = new Nilai([1, 10, 5, 20, 1, 15]);
nilai.tambah(5);
// nilai.list // < error private
console.log(nilai.rataRata());
console.log(nilai.tertinggi());
// SOAL 3 — Inheritance
// Buat class dasar Kegiatan dengan:
// - constructor(nama: string, tanggal: string)
// - method deskripsi(): string → "nama pada tanggal"
//
// Buat class JurnalHarian yang extends Kegiatan dengan:
// - tambahan property: hambatan (string)
// - override method deskripsi() untuk menyertakan hambatan juga
//
// Buat class SprintTask yang extends Kegiatan dengan:
// - tambahan property: prioritas ("low" | "medium" | "high")
// - override method deskripsi() untuk menyertakan prioritas juga
// Buat 1 instance dari masing-masing class dan panggil deskripsi()
class Kegiatan {
    constructor(nama, tanggal) {
        this.nama = nama;
        this.tanggal = tanggal;
    }
    deskripsi() {
        return `${this.nama} Pada ${this.tanggal}`;
    }
}
class JurnalHarian extends Kegiatan {
    constructor(nama, tanggal, hambatan) {
        super(nama, tanggal);
        this.hambatan = hambatan;
    }
    deskripsi() {
        return `${super.deskripsi()}\nHambatan: ${this.hambatan}`;
    }
}
class SprintTask extends Kegiatan {
    constructor(nama, tanggal, prioritas) {
        super(nama, tanggal);
        this.prioritas = prioritas;
    }
    deskripsi() {
        return `${super.deskripsi()}\nPrioritas: ${this.prioritas}`;
    }
}
const kegiatan = new Kegiatan("Zidan", "18-09-2026");
console.log(kegiatan.deskripsi());
const jurhar = new JurnalHarian("Zidan", "18-09-2026", "Tidak Ada");
console.log(jurhar.deskripsi());
const sprint = new SprintTask("Zidan", "18-09-2026", "high");
console.log(sprint.deskripsi());
//# sourceMappingURL=clases-inheritance.js.map