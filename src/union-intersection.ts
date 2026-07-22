// SOAL 1
// Buat type alias:
// - TextContent: { type: "text"; content: string }
// - ImageContent: { type: "image"; url: string; alt: string }
// - VideoContent: { type: "video"; url: string; durasi: number }
// - Content: union dari ketiga tipe di atas
//
// Buat fungsi renderContent(content: Content): string
// yang mengembalikan deskripsi berdasarkan type-nya
type TextContent = {
    type: "text";
    content: string;
};
type ImageContent = {
    type: "image";
    url: string;
    alt: string;
}
type VideoContent = {
    type: "video";
    url: string;
    durasi: number;
}
type Content = TextContent | ImageContent | VideoContent;

function renderContent(content: Content): string {
    if (content.type === "text") {
        return `type: ${content.type} | content: ${content.content}`;
    }
    if (content.type === "video") {
        return `type: ${content.type} | url: ${content.url} | durasi: ${content.durasi}`;
    }
    return `type: ${content.type} | url: ${content.url} | alt: ${content.alt}`;
}

const Novel: TextContent = {
    type: "text",
    content: "Seorang anak tertinggal di sebuah hutan rimbun"
}
const MonaLisa: ImageContent = {
    type: "image",
    url: "https://asset.kompas.com/crops/P-dUqhlnuoDEbm37c6kSP3cmB3E=/0x64:515x407/750x500/data/photo/2022/06/08/62a018bfd9d3e.jpg",
    alt: "Mona Lisa",
}

const Vlog: VideoContent = {
    type: "video",
    url: "https://youtube.com",
    durasi: 10,
}

console.log(renderContent(Novel));

// SOAL 2
// Buat 3 interface terpisah:
// - HasNama: { nama: string }
// - HasEmail: { email: string }
// - HasTelepon: { telepon: string }
//
// Gunakan intersection untuk buat:
// - KontakLengkap = HasNama & HasEmail & HasTelepon
// - KontakMinimal = HasNama & HasEmail
//
// Buat fungsi kirimNotifikasi(kontak: KontakMinimal, pesan: string): void
// Buat fungsi kirimWhatsApp(kontak: KontakLengkap, pesan: string): void
interface HasNama {
    nama: string
}
interface HasEmail {
    email: string
}

interface HasTelepon {
    telepon: string
}

type KontakLengkap = HasNama & HasEmail & HasTelepon;
type KontakMinimal = HasNama & HasEmail;

function kirimNotifikasi(kontak: KontakMinimal, pesan: string) {
    console.log(`Mengirim notifikasi ke:\natas nama: ${kontak.nama},\ndan email ${kontak.email}.\ndengan pesan: ${pesan}\n`);
}

function kirimWhatsapp(kontak: KontakLengkap, pesan: string) {
    console.log(`Mengirim notif whatsapp ke:\natas nama: ${kontak.nama},\ndan no. whatsapp ${kontak.telepon}.\ndengan pesan: ${pesan}\n`);
}

const zidan: KontakLengkap = {
    nama: "Zidan Alfa Permana",
    email: "zidanalfa18@gmail.com",
    telepon: "+62-85-706-341-874"
}
const zidan1: KontakMinimal = {
    nama: "Zidan Alfa Permana",
    email: "zidanalfa18@gmail.com",
}

kirimWhatsapp(zidan, "Tolong belikan es matcha");
kirimNotifikasi(zidan1, "Tolong belikan latte tanpa gula");

// SOAL 3
// Buat type WithLoading<T> = T & { isLoading: boolean; error: string | null }
// Gunakan untuk membuat tipe:
// - UserState = WithLoading<{ user: { nama: string; email: string } | null }>
// - ProductState = WithLoading<{ products: { id: number; nama: string }[] }>
// Buat 2 objek untuk masing-masing tipe
type WithLoading<T> = T & {
    isLoading: boolean;
    error: string | null;
}
type UserState = WithLoading<{ user: { nama: string; email: string } | null }>
type ProductState = WithLoading<{ products: { id: number; nama: string }[] }>

const pelanggan1: UserState = {
    isLoading: false,
    error: null,
    user: {
        nama: "Zidan Alfa Permana",
        email: "zidanalfa18@gmail.com"
    }
}
const pelanggan2: UserState = {
    isLoading: false,
    error: "Email tidak Valid",
    user: {
        nama: "Feri Ferdianto",
        email: "feriferdianto1@web.web"
    }
}

const makanan: ProductState = {
    isLoading: true,
    error: null,
    products: [
        {
            id: 1,
            nama: "Latte Tanpa Gula"
        },
        {
            id: 2,
            nama: "Es Teh Panas"
        }
    ]
}

const fashion: ProductState = {
    isLoading: false,
    error: "id duplikasi, ganti salah satu dengan id yang lain",
    products: [
        {
            id: 1,
            nama: "Sepatu Nikke"
        },
        {
            id: 1,
            nama: "Baju Adidas"
        }
    ]
}

console.log(pelanggan1);
console.log(pelanggan2);
console.log(makanan);
console.log(fashion);