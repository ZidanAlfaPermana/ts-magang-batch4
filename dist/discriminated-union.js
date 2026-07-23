"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successPayment = {
    status: "berhasil",
    transactionId: "628542a4-f412-4c2f-86cf-63ecec04bbb5",
    paidAt: "09-10-2026"
};
const pendingPayment = {
    status: "menunggu",
    expiredAt: "10-10-2026"
};
const refundPayment = {
    status: "refund",
    amount: 1000000,
    processedAt: "11-10-2026"
};
const canceledPayment = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: false
};
const canceledPaymentCanRetry = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: true
};
function getStatusLabel(payment) {
    switch (payment.status) {
        case "berhasil":
            return `Berhasil Membayar pada ${payment.paidAt}\n`;
        case "refund":
            return `Refund Berhasil pada ${payment.processedAt}\nSejumlah: Rp. ${Number(payment.amount).toFixed(2)}\n`;
        case "gagal":
            return `Pembayaran gagal dikarenakan ${payment.reason}\n${payment.canRetry ? "Silahkan Coba lagi" : "Mohon hubungi admin ya"}\n`;
        case "menunggu":
            return `Pembayaran kamu saat ini sedang dalam tahap review\nJika pembayaran tetap di status menunggu mohon coba lagi pada ${payment.expiredAt}\n`;
        default:
            return "Data Status Payment tidak valid\n";
    }
}
console.log(getStatusLabel(successPayment));
console.log(getStatusLabel(pendingPayment));
console.log(getStatusLabel(canceledPayment));
console.log(getStatusLabel(canceledPaymentCanRetry));
console.log(getStatusLabel(refundPayment));
const successNotification = {
    type: "success",
    message: "Pesan Berhasil terkirim",
    duration: 5
};
const errorNotification = {
    type: "error",
    message: "Pesan tidak ditemukan",
    code: 404,
    canDismiss: true
};
const warningNotification = {
    type: "warning",
    message: "Peringatan pesan harus diisi",
    action: "Fill Required Field"
};
const infoNotification = {
    type: "info",
    message: "Terdapat pesan terbaru"
};
function showNotification(notif) {
    switch (notif.type) {
        case "success":
            console.log(`${notif.message}\n`);
            break;
        case "error":
            console.log(`${notif.message}\n`);
            break;
        case "warning":
            console.log(`${notif.message}\n`);
            break;
        case "info":
            console.log(`${notif.message}\n`);
            break;
        default:
            console.log("Notification tidak valid, harap coba lagi");
    }
}
showNotification(warningNotification);
showNotification(infoNotification);
showNotification(warningNotification);
showNotification(successNotification);
showNotification(errorNotification);
function assertNever(x) {
    throw new Error(`Cli command tidak valid: \n${JSON.stringify(x, null, 2)}`);
}
function executeCommand(cmd) {
    switch (cmd.command) {
        case "clear":
            return `berhasil menghapus semua data`;
        case "add":
            return `berhasil menambahkan data\n${JSON.stringify(cmd.item, null, 2)}`;
        case "remove":
            return `berhasil menghapus data dengan\nid: ${cmd.id}`;
        case "list":
            return `berhasil mengambil semua data dengan filter:\n${JSON.stringify(cmd.filter, null, 2)}`;
        default:
            assertNever(cmd);
    }
}
const dataKeuangan = {
    command: "list",
    filter: "status: aktif",
};
console.log(executeCommand(dataKeuangan));
//# sourceMappingURL=discriminated-union.js.map