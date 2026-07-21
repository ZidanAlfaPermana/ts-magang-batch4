// SOAL 1
// Buat interface Peserta dengan:
// - id (number, readonly)
// - nama (string)
// - sekolah (string)
// - fase (number)
// - nilaiAkhir (number, optional)
// - github (string, optional)
// Buat 2 objek Peserta: satu dari SMK 5, satu dari SMK 6
interface Peserta {
    readonly id: number;
    nama: string;
    sekolah: string;
    fase: number;
    nilaiAkhir?: number;
    github?: string;
}

const smk5: Peserta = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/ZidanAlfaPermana",
}
const smk6: Peserta = {
    id: 3,
    nama: "Ajeng Nielza",
    sekolah: "SMKN 6 Malang",
    fase: 2,
    github: "https://github.com/ajengnielza/",
}

console.log(smk5)

// SOAL 2
// Buat interface Mentor dengan:
// - nama (string)
// - email (string, readonly)
// - keahlian (string[])
// - review(peserta: Peserta, catatan: string): string
//   → return: "Feedback untuk [nama]: [catatan]"
// Buat satu objek Mentor dan panggil method review-nya
interface Mentor {
    name: string;
    readonly email: string;
    keahlian: string[];
    review(peserta: Peserta, catatan: string): string;
}

const mentor1 : Mentor =  {
    name: "Pak Aziz",
    email: "aziz123@gmail.com",
    keahlian: [
        "Full Stack",
        "Cloud Management"
    ],
    review(peserta: Peserta, catatan: string) {
        return `Feedback Untuk ${peserta.nama}: ${catatan}`
    }
}

console.log(mentor1.review(smk5, "Penambahan method"));

// SOAL 3
// Buat interface Kelas dengan:
// - nama (string)
// - peserta (Peserta[])
// - mentor (Mentor)
// - tambahPeserta(p: Peserta): void
// - cariPeserta(nama: string): Peserta | undefined
// Implementasikan ke dalam sebuah objek dan test semua method-nya
interface Kelas {
    nama: string;
    peserta: Peserta[];
    mentor: Mentor;
    tambahPeserta(p: Peserta): void;
    cariPeserta(nama: string): Peserta | undefined;
}

const xiipplg3: Kelas = {
    nama: "XII PPLG 3",
    peserta: [
        smk5
    ],
    mentor: mentor1,
    tambahPeserta(p: Peserta) {
        this.peserta.push(p);
    },
    cariPeserta(name: string) {
        return this.peserta.find(peserta => peserta.nama === name);
    }
}
const smk5_1: Peserta = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
}
xiipplg3.tambahPeserta(smk5_1);
console.log(xiipplg3.cariPeserta("Zidan Alfa Permana"));
/*console.log(xiipplg3.cariPeserta("awdjiawds")); // akan keluar undefined dikarenakan tidak adanya nama tersebut di peserta*/
console.log(xiipplg3.peserta);