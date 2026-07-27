import { isNamaValid, isNilaiValid } from "./utils/validasi.js";
const siswaa = {
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    nilai: 100
};
const siswab = {
    nama: "Ahmad",
    sekolah: "SMKN 5 Malang",
    nilai: 75
};
const siswac = {
    nama: "Ri",
    sekolah: "SMKN 5 Malang",
    nilai: 120
};
console.log(`Nama Siswa ${siswaa.nama} | ${isNamaValid(siswaa.nama) ? "valid" : "tidak valid"}`);
console.log(`Nama Siswa ${siswab.nama} | ${isNamaValid(siswab.nama) ? "valid" : "tidak valid"}`);
console.log(`Nama Siswa ${siswac.nama} | ${isNamaValid(siswac.nama) ? "valid" : "tidak valid"}`);
console.log(`Nilai Siswa ${siswaa.nama} | ${isNilaiValid(siswaa.nilai) ? "valid" : "tidak valid"} | ${siswaa.nilai}`);
console.log(`Nilai Siswa ${siswab.nama} | ${isNilaiValid(siswab.nilai) ? "valid" : "tidak valid"} | ${siswab.nilai}`);
console.log(`Nilai Siswa ${siswac.nama} | ${isNilaiValid(siswac.nilai) ? "valid" : "tidak valid"} | ${siswac.nilai}`);
//# sourceMappingURL=index.js.map