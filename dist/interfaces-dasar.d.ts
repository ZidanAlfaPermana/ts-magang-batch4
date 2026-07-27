import type { PesertaStatus } from './type-alias.ts';
export type Peserta = {
    readonly id: number;
    nama: string;
    sekolah: string;
    fase: number;
    nilaiAkhir?: number;
    github?: string;
    status: PesertaStatus;
};
//# sourceMappingURL=interfaces-dasar.d.ts.map