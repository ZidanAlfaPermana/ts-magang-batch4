// SOAL 1 — Mapped type dasar
// Buat mapped type SemuaOptional<T> yang membuat semua property jadi optional
// (tanpa menggunakan Partial bawaan — buat sendiri)
// Test dengan interface JurnalHarian
type SemuaOptional<T> = {
    [K in keyof T]?: T[K]
}
interface JurnalHarian {
    id: number;
    nama: string;
    status: 'success' | 'error';
}

type jurnalHariSenin = SemuaOptional<JurnalHarian>;

const hari_sen: jurnalHariSenin = {
    id: 1,
    nama: "Zidan Alfa Permana",
}

console.log(hari_sen);

// SOAL 2 — Mapped type dengan transformasi
// Buat mapped type Nullable<T> yang membuat setiap property bisa bernilai null
// Contoh hasil: { nama: string | null; fase: number | null }
type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

type dataNull = Nullable<JurnalHarian>;

const data: dataNull = {
    id: 1,
    nama: null,
    status: 'success',
}
console.log(data)
// SOAL 3 — Mapped type dengan rename
// Buat mapped type DenganSetter<T> yang mengubah setiap property jadi setter method
// Contoh: { nama: string } menjadi { setNama: (value: string) => void }
type DenganSetter<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void
}

type jurnalSetter = DenganSetter<JurnalHarian>;

const jurnal1: jurnalSetter = {
    setId: value => 1,
    setNama: value => "Zidan Alfa P",
    setStatus: value => "success",
}

console.log(jurnal1);

// SOAL 4 — Conditional type
// Buat conditional type TipeNilai<T> yang:
// - jika T adalah number → return "angka"
// - jika T adalah string → return "teks"
// - jika T adalah boolean → return "boolean"
// - selain itu → return "lainnya"
type TipeNilai<T> = T extends number ? "angka" : T extends string ? "teks" : T extends boolean ? "boolean" : "lainnya";
type nilai = TipeNilai<number>
const nila: nilai = "angka";
console.log(nila);


// SOAL 5 — Conditional dengan infer
// Buat conditional type UnwrapPromise<T> yang mengambil tipe di dalam Promise
// Contoh: UnwrapPromise<Promise<string>> → string
//         UnwrapPromise<number> → number (bukan promise, kembalikan apa adanya)
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<number>;
type C = UnwrapPromise<Promise<{id: number}>>;
type UnwrappedString = UnwrapPromise<Promise<string>>;
const pesan: UnwrappedString = "Halo Zidan, ini hasil unwrap!";
console.log(pesan);