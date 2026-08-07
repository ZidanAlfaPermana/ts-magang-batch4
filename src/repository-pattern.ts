// SOAL 1
// Gunakan class Repository<T> di atas untuk membuat:
// - MentorRepository untuk entity Mentor (nama, keahlian: string[])
// - Buat 2 mentor, lalu test semua method (create, findById, update, delete)
interface Entity {
    id: number;
}

interface Peserta extends Entity {
    nama: string;
    sekolah: string;
    fase: number;
}

interface Buku extends Entity {
    nama: string;
    genre: string[];
}

class Repository<T extends Entity> {
    private items: T[] = [];
    private nextId: number = 1;

    create(data: Omit<T, "id">): T {
        const newItem = { ...data, id: this.nextId++ } as T;
        this.items.push(newItem);
        return newItem;
    }

    findById(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }

    findAll(): T[] {
        return [...this.items];
    }

    update(id: number, data: Partial<T>): T | undefined {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return undefined;

        this.items[index] = { ...this.items[index], ...data } as T;
        return this.items[index];
    }

    delete(id: number): boolean {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return false;

        this.items.splice(index, 1);
        return true;
    }

    count(): number {
        return this.items.length;
    }
}

interface Mentor extends Entity{
    nama: string;
    keahlian: string[];
}

const a = new Repository<Mentor>()
const zidan = a.create({nama: "Zidan Alfa", keahlian: ["Laravel Full Stack Developer", "Pocketmine-MP Plugin Developer"]});
const budi = a.create({nama: "Budi", keahlian: ["Laravel Full Stack Developer"]});

console.log(a.findAll());
console.log(a.findById(1));

a.update(1, {nama: "Zidan Alfa Permana"});
a.update(2, {nama: "Budi Iman"});

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
class PesertaRepository extends Repository<Peserta> {
    findBySekolah(sekolah: string): Peserta[] {
        return this.findAll().filter((item) => item.sekolah === sekolah);
    }

    findByFase(fase: number): Peserta[] {
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
class BukuRepo extends Repository<Buku>{
    create(data: Omit<Buku, "id">): Buku {
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
book.create({nama: "Pembunuhan Di Malam Kencana", genre: ['Horror', 'Killer', 'Psychological Horror']})
console.log(book.findAll());

// error
book.create({nama: '', genre: ['Horror']})
//book.create({nama: 'Pembunuhan Di Malam Kencana', genre: []})