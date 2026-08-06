interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    nilai: number;
}
// SOAL 1 — Multiple type parameters
// Buat fungsi generic konversiData<T, U>(data: T[], transform: (item: T) => U): U[]
// yang mentransformasi setiap elemen array menggunakan fungsi transform
function konversiData<T, U>(data: T[], transform: (item: T) => U): U[]
{
    return data.map(transform);
}
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = konversiData(number, (num) => `ID: ${num}`);
console.log(str);

const tes = [
    {sekolah: 'smkn 5 malang'},
    {sekolah: 'smkn 6 malang'},
];
const alphabet = konversiData(tes, (string) => string.sekolah);
console.log(alphabet);

// SOAL 2 — Class dengan 2 type parameter
// Buat class generic PasanganKunci<K, V> dengan:
// - private items: Array<{ kunci: K; nilai: V }>
// - method tambah(kunci: K, nilai: V): void
// - method cari(kunci: K): V | undefined
// - method getSemuaKunci(): K[]
class PasanganKunci<K, V> {
    private items: Array<{kunci: K; nilai: V}> = [];

    tambah(kunci: K, nilai: V) {
        this.items.push({kunci: kunci, nilai: nilai});
    }

    cari(kunci: K): V | undefined {
        const data = this.items.find((item) => item.kunci === kunci);
        return data ? data.nilai : undefined;
    }

    getSemuaKunci(): K[] {
        return this.items.map((item) => item.kunci);
    }
}
const a = new PasanganKunci<string, string>();
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

const siswa1: Peserta = {
    id: 0,
    nama: "Zidan",
    nilai: 100,
    sekolah: "SMKN 5 Malang"
}

const siswa2: Peserta = {
    id: 1,
    nama: "Budi",
    nilai: 90,
    sekolah: "SMKN 5 Malang"
}

const allPeserta: Peserta[] = [
    siswa1,
    siswa2,
]

interface ApiResult<T = { message: string }> {
    status: number;
    result: T;
}

const success: ApiResult = {
    status: 200,
    result: {
        message: 'Success',
    }
}

const failure: ApiResult<Peserta[]> = {
    status: 400,
    result: allPeserta
}

console.log(success);
console.log(failure);

// SOAL 4 — Kombinasi constraint + default
// Buat interface ListResponse<T extends { id: number } = { id: number; nama: string }> dengan:
// - items: T[]
// - total: number
// Buat 2 instance: satu pakai default, satu dengan tipe Peserta kustom
interface ListResponse<T extends { id: number } = { id: number; nama: string }> {
    items: T[];
    total: number;
}

const respon1: ListResponse = {
    items: [
        {id: 1, nama: "Es Krim"}
    ],
    total: 1000
}
const respon2: ListResponse<Peserta> = {
    items: allPeserta,
    total: 2
}
console.log(respon1);
console.log(respon2);