function renderContent(content) {
    if (content.type === "text") {
        return `type: ${content.type} | content: ${content.content}`;
    }
    if (content.type === "video") {
        return `type: ${content.type} | url: ${content.url} | durasi: ${content.durasi}`;
    }
    return `type: ${content.type} | url: ${content.url} | alt: ${content.alt}`;
}
const Novel = {
    type: "text",
    content: "Seorang anak tertinggal di sebuah hutan rimbun"
};
const MonaLisa = {
    type: "image",
    url: "https://asset.kompas.com/crops/P-dUqhlnuoDEbm37c6kSP3cmB3E=/0x64:515x407/750x500/data/photo/2022/06/08/62a018bfd9d3e.jpg",
    alt: "Mona Lisa",
};
const Vlog = {
    type: "video",
    url: "https://youtube.com",
    durasi: 10,
};
console.log(renderContent(Novel));
function kirimNotifikasi(kontak, pesan) {
    console.log(`Mengirim notifikasi ke:\natas nama: ${kontak.nama},\ndan email ${kontak.email}.\ndengan pesan: ${pesan}\n`);
}
function kirimWhatsapp(kontak, pesan) {
    console.log(`Mengirim notif whatsapp ke:\natas nama: ${kontak.nama},\ndan no. whatsapp ${kontak.telepon}.\ndengan pesan: ${pesan}\n`);
}
const zidan = {
    nama: "Zidan Alfa Permana",
    email: "zidanalfa18@gmail.com",
    telepon: "+62-85-706-341-874"
};
const zidan1 = {
    nama: "Zidan Alfa Permana",
    email: "zidanalfa18@gmail.com",
};
kirimWhatsapp(zidan, "Tolong belikan es matcha");
kirimNotifikasi(zidan1, "Tolong belikan latte tanpa gula");
const pelanggan1 = {
    isLoading: false,
    error: null,
    user: {
        nama: "Zidan Alfa Permana",
        email: "zidanalfa18@gmail.com"
    }
};
const pelanggan2 = {
    isLoading: false,
    error: "Email tidak Valid",
    user: {
        nama: "Feri Ferdianto",
        email: "feriferdianto1@web.web"
    }
};
const makanan = {
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
};
const fashion = {
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
};
console.log(pelanggan1);
console.log(pelanggan2);
console.log(makanan);
console.log(fashion);
export {};
//# sourceMappingURL=union-intersection.js.map