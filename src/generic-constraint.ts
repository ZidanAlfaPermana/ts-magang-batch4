// SOAL 1
// Buat fungsi generic dengan constraint hitungTotal<T extends { harga: number }>(items: T[]): number
// yang menjumlahkan property harga dari semua item di array
function hitungTotal<T extends { harga: number }>(items: T[]): number {
    return items.reduce((total, item ) => total + item.harga, 0);
}

console.log(hitungTotal([
    {barang: 'Kardus', harga: 1000},
    {barang: 'Botol', harga: 5000},
    {barang: 'Plastik', harga: 10500}
]))

// SOAL 2
// Buat interface PunyaTanggal dengan property: tanggal (string)
// Buat fungsi generic urutkanBerdasarkanTanggal<T extends PunyaTanggal>(items: T[]): T[]
// yang mengurutkan array berdasarkan tanggal (ascending)

interface PunyaTanggal {
    tanggal: string;
}

function urutkanBerdasarkanTanggal<T extends PunyaTanggal>(items: T[]): T[]
{
    return items.sort((a, b) => Date.parse(a.tanggal) - Date.parse(b.tanggal));
}

interface Tugas extends PunyaTanggal {
    nama: string;
}

const a: Tugas = {
    tanggal: "2026-10-03",
    nama: "Membuat Web Laravel"
}
const b: Tugas = {
    tanggal: "2026-10-01",
    nama: "Membuat Web Laravel"
}
const c: Tugas = {
    tanggal: "2026-10-02",
    nama: "Membuat Web Laravel"
}

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
function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T
{
    return {
        ...obj,
        [key]: value
    };
}
const data = { name: "Budi", age: 20 };
console.log(data);
console.log(updateProperty(data, "age", 21));

// SOAL 4 — Konteks magang
// Buat interface DapatDiverifikasi dengan method verifikasi(): boolean
// Buat fungsi generic prosesJikaValid<T extends DapatDiverifikasi>(item: T, aksi: (item: T) => void): void
// yang hanya menjalankan aksi jika item.verifikasi() bernilai true
// Buat class SprintTask implements DapatDiverifikasi untuk test fungsi ini
interface DapatDiverifikasi {
    verifikasi(): boolean;
}

function prosesJikaValid<T extends DapatDiverifikasi>(item: T, aksi: (item: T) => void): void
{
    if (!item.verifikasi()) {
        console.log("Gagal verifikasi, kemungkinan error terjadi");
        return;
    }
    aksi(item);
}

class SprintTask implements DapatDiverifikasi {
    constructor(private nama: string) {
    }

    verifikasi(): boolean {
        return this.nama.length > 0;
    }
}

const task = new SprintTask("Laravel Website");
prosesJikaValid(task, (t) => {
    console.log(`data berjasil di verifikasi: ${t.verifikasi()}`);
});