function updateJurnal(id, data) {
    console.log(`data statusRiview berhasil di update dengan ID: ${id}\n`, data);
}
const jurnal1 = {
    id: 1,
    pesertaId: 1,
    tanggal: 'Horror',
    kegiatan: 'Psychological Horror',
    hambatan: 'Killer',
    rencanaBesok: 'Psychological Horror',
    linkCommit: 'Horror',
    statusReview: "belum",
};
updateJurnal(1, { statusReview: "sudah" });
function buatJurnal(data) {
    return {
        id: Math.random(),
        ...data,
        statusReview: "belum"
    };
}
console.log(buatJurnal({
    pesertaId: 1,
    tanggal: 'Horror',
    kegiatan: 'Psychological Horror',
    hambatan: 'Killer',
    rencanaBesok: 'Psychological Horror',
    linkCommit: 'Horror',
}));
const jurnal = {
    id: 1,
    pesertaId: 1,
    tanggal: "2020-06-20",
    kegiatan: "Membuat project laravel",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://zidanalfapermana.github.io/",
    statusReview: "belum",
};
function getRingkasan(jurnal) {
    return {
        id: jurnal.id,
        tanggal: jurnal.tanggal,
        kegiatan: jurnal.kegiatan,
    };
}
console.log(getRingkasan(jurnal));
const durasiFase = {
    fase1: 2,
    fase2: 2,
    fase3: 3,
    fase4: 1,
    fase5: 3
};
const namaFase = {
    fase1: "Zidan Alfa Permana",
    fase2: "Budi Binusi",
    fase3: "Lani lastani",
    fase4: "Jasir Kani",
    fase5: "Juliri Kani",
};
console.log(namaFase);
console.log(durasiFase);
const jurnalku = {
    pesertaId: 1,
    tanggal: "2020-06-20",
    kegiatan: "Membuat project laravel",
    hambatan: "Tidak Ada",
    rencanaBesok: "Tidak Ada",
    linkCommit: "https://zidanalfapermana.github.io/",
    statusReview: "belum",
};
console.log(jurnalku);
export {};
//# sourceMappingURL=utility-types.js.map