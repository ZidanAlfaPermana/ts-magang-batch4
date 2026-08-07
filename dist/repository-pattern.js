class Repository {
    constructor() {
        this.items = [];
        this.nextId = 1;
    }
    create(data) {
        const newItem = { ...data, id: this.nextId++ };
        this.items.push(newItem);
        return newItem;
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
    findAll() {
        return [...this.items];
    }
    update(id, data) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1)
            return undefined;
        this.items[index] = { ...this.items[index], ...data };
        return this.items[index];
    }
    delete(id) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    count() {
        return this.items.length;
    }
}
const a = new Repository();
const zidan = a.create({ nama: "Zidan Alfa", keahlian: ["Laravel Full Stack Developer", "Pocketmine-MP Plugin Developer"] });
const budi = a.create({ nama: "Budi", keahlian: ["Laravel Full Stack Developer"] });
console.log(a.findAll());
console.log(a.findById(1));
a.update(1, { nama: "Zidan Alfa Permana" });
a.update(2, { nama: "Budi Iman" });
console.log(a.findById(1));
console.log(a.findById(2));
a.delete(1);
console.log(a.findAll());
a.delete(2);
console.log(a.findAll());
// SOAL 2 — Extend Repository dengan method tambahan
// Buat class PesertaRepository extends Repository<Peserta> dengan tambahan method:
// - findBySekolah(sekolah: string): Peserta[]
// - findByFase(fase: number): Peserta[]
//
// Buat beberapa peserta dan test kedua method tambahan ini
class PesertaRepository extends Repository {
    findBySekolah(sekolah) {
        return this.findAll().filter((item) => item.sekolah === sekolah);
    }
    findByFase(fase) {
        return this.findAll().filter((item) => item.fase === fase);
    }
}
const pesertaRepo = new PesertaRepository();
pesertaRepo.create({ nama: "Ahmad", sekolah: "SMK 5 Malang", fase: 1 });
pesertaRepo.create({ nama: "Beni", sekolah: "SMK 5 Malang", fase: 2 });
pesertaRepo.create({ nama: "Rani", sekolah: "SMK 6 Malang", fase: 2 });
console.log(pesertaRepo.findAll());
console.log(pesertaRepo.findBySekolah("SMK 5 Malang"));
console.log(pesertaRepo.findBySekolah("SMK 6 Malang"));
console.log(pesertaRepo.findByFase(1));
console.log(pesertaRepo.findByFase(2));
// SOAL 3 — Repository dengan validasi
// Modifikasi method create() agar menerima constraint tambahan:
// method create harus mengecek apakah data valid dulu sebelum disimpan
// (misal: nama tidak boleh kosong)
// Jika tidak valid, throw Error dengan pesan yang jelas
class BukuRepo extends Repository {
    create(data) {
        if (data.nama === '' || data.nama === undefined) {
            throw new Error(`nama buku is required`);
        }
        if (data.genre === undefined || data.genre.length === 0) {
            throw new Error(`genre buku is required`);
        }
        return super.create(data);
    }
}
const book = new BukuRepo();
book.create({ nama: "Pembunuhan Di Malam Kencana", genre: ['Horror', 'Killer', 'Psychological Horror'] });
console.log(book.findAll());
// error
book.create({ nama: '', genre: ['Horror'] });
export {};
//book.create({nama: 'Pembunuhan Di Malam Kencana', genre: []})
//# sourceMappingURL=repository-pattern.js.map