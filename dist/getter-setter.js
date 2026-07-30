// SOAL 1
// Buat class Akun dengan:
// - private _saldo: number
// - get saldo(): number
// - set saldo(nilai: number) → tolak jika nilai negatif, tampilkan pesan
// - method tambahSaldo(jumlah: number): void
// - method tarikSaldo(jumlah: number): boolean → return false jika saldo tidak cukup
class Akun {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(value) {
        if (this._saldo < 0) {
            console.log("Saldo tidak boleh sampai minus");
            return;
        }
        this._saldo = value;
        return;
    }
    tambahSaldo(jumlah) {
        this._saldo += jumlah;
    }
    tarikSaldo(jumlah) {
        if (this._saldo < jumlah) {
            return false;
        }
        this.saldo -= jumlah;
        return true;
    }
}
const akun = new Akun(10000);
const valid = 1000;
const invalid = 9999999999999;
console.log(`Saldo Awal: ${akun.saldo}`);
akun.tambahSaldo(valid);
console.log(`Saldo Ditambah menjadi: ${akun.saldo}`);
akun.tarikSaldo(valid);
console.log(`Saldo Ditarik menjadi: ${akun.saldo}`);
console.log(akun.tarikSaldo(invalid) ? `Saldo Berhasil di tarik. Kini saldomu tersisa: ${akun.saldo}` : `Saldo gagal ditarik. Saldomu tidak cukup: ${akun.saldo}, jumlah yang ingin ditarik: ${invalid}`);
// SOAL 2
// Buat class PesertaMagang dengan:
// - private nilaiList: number[]
// - get rataRata(): number
// - get nilaiTertinggi(): number
// - get grade(): string (A jika >=90, B jika >=75, C jika >=60, D jika kurang)
// - method tambahNilai(nilai: number): void
class PesertaMagang {
    constructor() {
        this.nilaiList = [];
    }
    get rataRata() {
        if (this.nilaiList.length === 0)
            return 0;
        return this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length;
    }
    get nilaiTertinggi() {
        return Math.max(...this.nilaiList);
    }
    get grade() {
        if (this.rataRata >= 90)
            return "A";
        if (this.rataRata >= 75)
            return "B";
        if (this.rataRata >= 60)
            return "C";
        return "D";
    }
    get allNilai() {
        return this.nilaiList;
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
}
const peserta = new PesertaMagang();
console.log(peserta.allNilai);
peserta.tambahNilai(50);
peserta.tambahNilai(100);
console.log(peserta.allNilai);
console.log(peserta.rataRata);
console.log(peserta.nilaiTertinggi);
console.log(peserta.grade);
// SOAL 3
// Buat class Password dengan:
// - private _value: string
// - set value(input: string) → validasi: minimal 8 karakter, harus ada angka
//   jika tidak valid, throw Error dengan pesan yang jelas
// - get value(): string → return "********" (jangan tampilkan password asli!)
// - method verifikasi(input: string): boolean → bandingkan dengan _value asli
class Password {
    constructor() {
        this._value = "";
    }
    set value(input) {
        if (input === "" || input === undefined) {
            throw new Error(`Password tidak boleh kosong`);
        }
        if (input.length < 8) {
            throw new Error(`Password minimal 8 kata`);
        }
        if (!/\d/.test(input)) {
            throw new Error(`Password harus memiliki 1 angka`);
        }
        this._value = input;
        return;
    }
    get value() {
        return this._value.replace(/./g, "*");
    }
    verifikasi(input) {
        return input === this._value;
    }
}
const pass = new Password();
try {
    pass.value = "pass";
}
catch (e) {
    console.log(e);
}
pass.value = "passwordyangkuat123";
console.log(pass.value);
console.log(pass.verifikasi("passwordyangkuat123") ? "Password benar, Selamat datang kembali" : "Password Salah, Coba lagi");
export {};
//# sourceMappingURL=getter-setter.js.map