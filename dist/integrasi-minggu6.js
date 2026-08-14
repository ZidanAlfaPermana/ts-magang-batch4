// STUDI KASUS: Type-Safe Event System untuk SiTrack
//
// Gabungkan semua topik Minggu 6:
// - Utility types (Rabu)
// - Mapped & Conditional types (Kamis)
// - Template literal types (hari ini)
// LANGKAH 5 — Type-safe event emitter
class EventBus {
    constructor() {
        this.handlers = {};
    }
    on(event, handler) {
        if (!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);
    }
    emit(event, payload) {
        const eventHandlers = this.handlers[event];
        if (!eventHandlers)
            return;
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
const satu = {
    item: {
        id: 1,
        nama: "Zidan",
        sekolah: "SMK 5 Malang",
        fase: 1,
        email: "zidan@mail.com"
    }
};
const banyak = {
    items: [satu.item],
    total: 1
};
console.log(satu);
console.log(banyak);
export {};
//# sourceMappingURL=integrasi-minggu6.js.map