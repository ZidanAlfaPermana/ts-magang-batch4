"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smk5 = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/ZidanAlfaPermana",
};
const smk6 = {
    id: 3,
    nama: "Ajeng Nielza",
    sekolah: "SMKN 6 Malang",
    fase: 2,
    github: "https://github.com/ajengnielza/",
};
console.log(smk5);
const mentor1 = {
    name: "Pak Aziz",
    email: "aziz123@gmail.com",
    keahlian: [
        "Full Stack",
        "Cloud Management"
    ],
    review(peserta, catatan) {
        return `Feedback Untuk ${peserta.nama}: ${catatan}`;
    }
};
console.log(mentor1.review(smk5, "Penambahan method"));
const xiipplg3 = {
    nama: "XII PPLG 3",
    peserta: [
        smk5
    ],
    mentor: mentor1,
    tambahPeserta(p) {
        this.peserta.push(p);
    },
    cariPeserta(name) {
        return this.peserta.find(peserta => peserta.nama === name);
    }
};
const smk5_1 = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
};
xiipplg3.tambahPeserta(smk5_1);
console.log(xiipplg3.cariPeserta("Zidan Alfa Permana"));
/*console.log(xiipplg3.cariPeserta("awdjiawds")); // akan keluar undefined dikarenakan tidak adanya nama tersebut di peserta*/
console.log(xiipplg3.peserta);
//# sourceMappingURL=interfaces-dasar.js.map