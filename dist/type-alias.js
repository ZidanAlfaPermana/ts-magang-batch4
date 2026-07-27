const jurnalSenin = {
    kegiatan: "Membuat Project Laravel",
    hambatan: "terdapat masalah pada Eloquent",
    rencanaBesok: "Memperbaiki masalah pada Eloquent",
    tanggal: "01-02-2027",
    checkIn: "09-07-2026",
    checkOut: "09-07-2026",
};
const jurnalSelasa = {
    kegiatan: "Memperbaiki masalah pada Eloquent",
    hambatan: "Tidak ada",
    rencanaBesok: "Mengupload ke github.com",
    linkCommit: "https://github.com/ZidanAlfaPermana",
    tanggal: "01-02-2027",
    checkIn: "09-07-2026",
    checkOut: "09-07-2026",
};
// SOAL 3
// Refaktor interface Peserta dari Senin menggunakan type alias:
// - Buat type PesertaStatus = "aktif" | "lulus" | "berhenti"
// - Tambahkan property status: PesertaStatus ke interface Peserta
// - Buat fungsi filterPeserta(list: Peserta[], status: PesertaStatus): Peserta[]
const smk5 = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif",
};
const smk5_1 = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
    status: "aktif"
};
const AllPeserta = [
    smk5,
    smk5_1
];
function filterPeserta(list, status) {
    return list.filter(peserta => peserta.status === status);
}
console.log(filterPeserta(AllPeserta, "aktif"));
export {};
//# sourceMappingURL=type-alias.js.map