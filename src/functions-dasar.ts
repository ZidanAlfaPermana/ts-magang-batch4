// SOAL 1
// Buat fungsi hitungNilaiAkhir(tugas: number, uts: number, uas: number): number
// Formula: (tugas * 0.3) + (uts * 0.3) + (uas * 0.4)
// Pastikan semua parameter dan return type bertipe number
function hitungNilaiAkhir(tugas: number, uts: number, uas: number): number
{
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

console.log(hitungNilaiAkhir(100, 75, 80));

// SOAL 2
// Buat fungsi buatPengumuman(judul: string, isi?: string, penting: boolean = false): string
// Jika penting = true, tambahkan awalan "[PENTING] " di depan judul
// Jika isi ada, gabungkan dengan format: "judul: isi"
// Jika isi tidak ada, kembalikan judul saja
function buatPengumuman(judul: string, penting: boolean, isi?: string): string {
    if (isi || isi !== undefined) {
        return `${penting ? '[PENTING] | ' : ''}${judul}: ${isi}`;
    }
    return `${penting ? '[PENTING] | ' : ''}${judul}`;
}
console.log(buatPengumuman("Laravel Creation", true, "Membuat project sebuah dashboard"));
console.log(buatPengumuman("Laravel Creation", false, "Membuat project sebuah toko"));
console.log(buatPengumuman("Laravel Debugging", true));


// SOAL 3
// Buat fungsi logCheckIn(nama: string, waktu: string): void
// yang mencetak: "[CHECK-IN] nama - waktu"
// Panggil fungsi ini 3 kali dengan data peserta berbeda
function logCheckIn(nama: string, waktu: string) {
    console.log(`[CHECK-IN] ${nama} - ${waktu}`);
}

logCheckIn("Zidan Alfa Permana", "07-24-2026")
logCheckIn("Feri Ferfianto", "07-24-2026")
logCheckIn("Achmad Romadhon", "07-24-2026")

// SOAL 4
// Buat fungsi formatDurasi(menit: number, tampilkanDetik: boolean = false): string
// Jika tampilkanDetik = false: "2 jam 30 menit"
// Jika tampilkanDetik = true: "2 jam 30 menit 0 detik"
function formatDurasi(menit: number, tampilkanDetik: boolean = false): string {
    return `${tampilkanDetik ? "2 jam 30 menit 0 detik" : "2 jam 30 menit"}`;
}

console.log(formatDurasi(1000));
console.log(formatDurasi(1000, true));