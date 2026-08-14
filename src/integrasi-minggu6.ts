// STUDI KASUS: Type-Safe Event System untuk SiTrack
//
// Gabungkan semua topik Minggu 6:
// - Utility types (Rabu)
// - Mapped & Conditional types (Kamis)
// - Template literal types (hari ini)

// LANGKAH 1 — Definisikan entity dasar
interface Peserta {
    id: number;
    nama: string;
    sekolah: string;
    fase: number;
    email: string;
}

interface JurnalHarian {
    id: number;
    pesertaId: number;
    tanggal: string;
    kegiatan: string;
    statusReview: "belum" | "sudah";
}

// LANGKAH 2 — Gunakan utility types untuk membuat variasi tipe
type PesertaBaru = Omit<Peserta, "id">;
type PesertaUpdate = Partial<Omit<Peserta, "id">>;
type PesertaPublik = Pick<Peserta, "id" | "nama" | "sekolah">;

type JurnalBaru = Omit<JurnalHarian, "id" | "statusReview">;
type JurnalUpdate = Partial<Omit<JurnalHarian, "id" | "pesertaId">>;

// LANGKAH 3 — Template literal untuk event names
type EntityName = "peserta" | "jurnal";
type EventAksi = "created" | "updated" | "deleted";
type EventName = `${EntityName}:${EventAksi}`;

// LANGKAH 4 — Mapped type untuk event payload
type EventPayload = {
    "peserta:created": Peserta;
    "peserta:updated": { id: number; changes: PesertaUpdate };
    "peserta:deleted": { id: number };
    "jurnal:created": JurnalHarian;
    "jurnal:updated": { id: number; changes: JurnalUpdate };
    "jurnal:deleted": { id: number };
};

// LANGKAH 5 — Type-safe event emitter
class EventBus {
    private handlers: Partial<Record<EventName, Function[]>> = {};

    on<E extends EventName>(
        event: E,
        handler: (payload: EventPayload[E]) => void
    ): void {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event]!.push(handler);
    }

    emit<E extends EventName>(event: E, payload: EventPayload[E]): void {
        const eventHandlers = this.handlers[event];
        if (!eventHandlers) return;

        eventHandlers.forEach((h) => h(payload));
    }
}

// LANGKAH 6 — Implementasi & test
const bus = new EventBus();

bus.on("peserta:created", (peserta) => {
    // TypeScript tahu peserta bertipe Peserta
    console.log(`Peserta baru: ${peserta.nama} dari ${peserta.sekolah}`);
});

bus.on("jurnal:updated", (data) => {
    // TypeScript tahu data bertipe { id: number; changes: JurnalUpdate }
    console.log(`Jurnal ${data.id} diupdate:`, data.changes);
});

bus.emit("peserta:created", {
    id: 1,
    nama: "Zidan",
    sekolah: "SMK 5 Malang",
    fase: 1,
    email: "zidan@mail.com"
});

bus.emit("peserta:created", {
    id: 2,
    nama: "Budi",
    sekolah: "SMK 5 Malang",
    fase: 2,
    email: "budi@mail.com"
});

bus.emit("jurnal:updated", {
    id: 5,
    changes: { statusReview: "sudah" }
});

// LANGKAH 7 (bonus) — Buat conditional type
// Buat type IsListResponse<T> yang mengembalikan:
// - { items: T; total: number } jika T adalah array
// - { item: T } jika bukan array
// Gunakan untuk membuat 2 tipe response: untuk list peserta dan single peserta
type IsListResponse<T> = T extends any[] ? {items: T; total: number} : { item: T };

type single = IsListResponse<Peserta>;
type multiple = IsListResponse<Peserta[]>;

const satu: single = {
    item: {
        id: 1,
        nama: "Zidan",
        sekolah: "SMK 5 Malang",
        fase: 1,
        email: "zidan@mail.com"
    }
}

const banyak: multiple = {
    items: [satu.item],
    total: 1
}
console.log(satu);
console.log(banyak);