// SOAL 1
// Buat fungsi generic dengan constraint hitungTotal<T extends { harga: number }>(items: T[]): number
// yang menjumlahkan property harga dari semua item di array
function hitungTotal(items) {
    return items.reduce((total, item) => total + item.harga, 0);
}
console.log(hitungTotal([
    { barang: 'Kardus', harga: 1000 },
    { barang: 'Botol', harga: 5000 },
    { barang: 'Plastik', harga: 10500 }
]));
function urutkanBerdasarkanTanggal(items) {
    return items.sort((a, b) => Date.parse(a.tanggal) - Date.parse(b.tanggal));
}
const a = {
    tanggal: "2026-10-03",
    nama: "Membuat Web Laravel"
};
const b = {
    tanggal: "2026-10-01",
    nama: "Membuat Web Laravel"
};
const c = {
    tanggal: "2026-10-02",
    nama: "Membuat Web Laravel"
};
const allTugas = [
    a,
    b,
    c
];
console.log(urutkanBerdasarkanTanggal(allTugas));
// SOAL 3 — keyof constraint
// Buat fungsi generic updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T
// yang mengembalikan objek baru dengan satu property yang diupdate
// (gunakan spread operator, jangan ubah objek asli)
function updateProperty(obj, key, value) {
    return {
        ...obj,
        [key]: value
    };
}
const data = { name: "Budi", age: 20 };
console.log(data);
console.log(updateProperty(data, "age", 21));
function prosesJikaValid(item, aksi) {
    if (!item.verifikasi()) {
        console.log("Gagal verifikasi, kemungkinan error terjadi");
        return;
    }
    aksi(item);
}
class SprintTask {
    constructor(nama) {
        this.nama = nama;
    }
    verifikasi() {
        return this.nama.length > 0;
    }
}
const task = new SprintTask("Laravel Website");
prosesJikaValid(task, (t) => {
    console.log(`data berjasil di verifikasi: ${t.verifikasi()}`);
});
export {};
//# sourceMappingURL=generic-constraint.js.map