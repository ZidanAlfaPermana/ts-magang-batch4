import type { Peserta } from "./interfaces-dasar";

// SOAL 1
// Buat type alias untuk:
// - FaseProgram: union "Fase 1" | "Fase 2" | "Fase 3" | "Fase 4" | "Fase 5"
// - NilaiAspek: number (1-10)
// - HasilPenilaian: objek dengan kehadiran, materi, kode, problemSolving, komunikasi
//   (semua bertipe NilaiAspek)
type FaseProgram = "Fase 1" | "Fase 2" | "Fase 3" | "Fase 4" | "Fase 5";
type NilaiAspek = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type HasilPenilaian = {
    kehadiran: NilaiAspek;
    materi: NilaiAspek;
    kode: NilaiAspek;
    problemSolving: NilaiAspek;
    komunikasi: NilaiAspek;
}

// SOAL 2
// Buat interface Absensi dengan: tanggal, checkIn, checkOut (semua string)
// Buat interface JurnalHarian yang extends Absensi dengan:
// - kegiatan (string)
// - hambatan (string)
// - rencanaBesok (string)
// - linkCommit (string, optional)
// Buat 2 objek JurnalHarian: satu dengan linkCommit, satu tanpa
interface Absensi {
    tanggal: string;
    checkIn: string;
    checkOut: string;
}

interface JurnalHarian extends Absensi {
    kegiatan: string;
    hambatan: string;
    rencanaBesok: string;
    linkCommit?: string;
}

const jurnalSenin: JurnalHarian = {
    kegiatan: "Membuat Project Laravel",
    hambatan: "terdapat masalah pada Eloquent",
    rencanaBesok: "Memperbaiki masalah pada Eloquent",
    tanggal: "01-02-2027",
    checkIn: "09-07-2026",
    checkOut: "09-07-2026",
}
const jurnalSelasa: JurnalHarian = {
    kegiatan: "Memperbaiki masalah pada Eloquent",
    hambatan: "Tidak ada",
    rencanaBesok: "Mengupload ke github.com",
    linkCommit: "https://github.com/ZidanAlfaPermana",
    tanggal: "01-02-2027",
    checkIn: "09-07-2026",
    checkOut: "09-07-2026",
}

// SOAL 3
// Refaktor interface Peserta dari Senin menggunakan type alias:
// - Buat type PesertaStatus = "aktif" | "lulus" | "berhenti"
// - Tambahkan property status: PesertaStatus ke interface Peserta
// - Buat fungsi filterPeserta(list: Peserta[], status: PesertaStatus): Peserta[]
const smk5: Peserta = {
    id: 1,
    nama: "Zidan Alfa Permana",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/ZidanAlfaPermana",
    status: "aktif",
}
const smk5_1: Peserta = {
    id: 2,
    nama: "Linda Angellina",
    sekolah: "SMKN 5 Malang",
    fase: 2,
    github: "https://github.com/lindaangellina",
    status: "aktif"
}

const AllPeserta: Peserta[] = [
    smk5,
    smk5_1
]

export type PesertaStatus = "aktif" | "lulus" | "berhenti";

function filterPeserta(list: Peserta[], status: PesertaStatus): Peserta[] {
    return list.filter(peserta => peserta.status === status);
}

console.log(filterPeserta(AllPeserta , "aktif"));


