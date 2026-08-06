// SOAL 1 — Multiple type parameters
// Buat fungsi generic konversiData<T, U>(data: T[], transform: (item: T) => U): U[]
// yang mentransformasi setiap elemen array menggunakan fungsi transform
function konversiData(data, transform) {
    return data.map(transform);
}
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = konversiData(number, (num) => `ID: ${num}`);
console.log(str);
const tes = [
    { sekolah: 'smkn 5 malang' },
    { sekolah: 'smkn 6 malang' },
];
const alphabet = konversiData(tes, (string) => string.sekolah);
console.log(alphabet);
// SOAL 2 — Class dengan 2 type parameter
// Buat class generic PasanganKunci<K, V> dengan:
// - private items: Array<{ kunci: K; nilai: V }>
// - method tambah(kunci: K, nilai: V): void
// - method cari(kunci: K): V | undefined
// - method getSemuaKunci(): K[]
class PasanganKunci {
    constructor() {
        this.items = [];
    }
    tambah(kunci, nilai) {
        this.items.push({ kunci: kunci, nilai: nilai });
    }
    cari(kunci) {
        const data = this.items.find((item) => item.kunci === kunci);
        return data ? data.nilai : undefined;
    }
    getSemuaKunci() {
        return this.items.map((item) => item.kunci);
    }
}
const a = new PasanganKunci();
console.log(a.getSemuaKunci());
a.tambah("nilai", "5");
console.log(a.getSemuaKunci());
console.log(a.cari("nilai"));
// SOAL 3 — Default type parameter
// Buat interface ApiResult<T = { message: string }> dengan:
// - status: number
// - result: T
// Buat 2 penggunaan: satu tanpa generic parameter (pakai default),
// satu dengan generic parameter kustom (misal: ApiResult<Peserta[]>)
const siswa1 = {
    id: 0,
    nama: "Zidan",
    nilai: 100,
    sekolah: "SMKN 5 Malang"
};
const siswa2 = {
    id: 1,
    nama: "Budi",
    nilai: 90,
    sekolah: "SMKN 5 Malang"
};
const allPeserta = [
    siswa1,
    siswa2,
];
const success = {
    status: 200,
    result: {
        message: 'Success',
    }
};
const failure = {
    status: 400,
    result: allPeserta
};
console.log(success);
console.log(failure);
const respon1 = {
    items: [
        { id: 1, nama: "Es Krim" }
    ],
    total: 1000
};
const respon2 = {
    items: allPeserta,
    total: 2
};
console.log(respon1);
console.log(respon2);
export {};
//# sourceMappingURL=multiple-default-params.js.map