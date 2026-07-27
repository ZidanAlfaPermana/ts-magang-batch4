function isNamaValid(nama: string): boolean {
    return nama.length >= 3;
}

function isNilaiValid(nilai: number): boolean {
    return nilai >= 0 && nilai <= 100;
}

export {isNamaValid, isNilaiValid};