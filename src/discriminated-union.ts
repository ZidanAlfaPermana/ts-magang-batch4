// SOAL 1
// Buat discriminated union untuk status pembayaran:
// - { status: "menunggu"; expiredAt: string }
// - { status: "berhasil"; transactionId: string; paidAt: string }
// - { status: "gagal"; reason: string; canRetry: boolean }
// - { status: "refund"; amount: number; processedAt: string }
//
// Buat fungsi getStatusLabel(payment: PaymentStatus): string
// yang mengembalikan teks yang sesuai untuk setiap status
interface Success {
    status: "berhasil";
    transactionId: string;
    paidAt: string;
}

interface Gagal {
    status: "gagal";
    reason: string;
    canRetry: boolean;
}

interface Waiting {
    status: "menunggu";
    expiredAt: string;
}

interface Refund {
    status: "refund";
    amount: number;
    processedAt: string;
}

type PaymentStatus = Success | Refund | Waiting | Gagal;

const successPayment: PaymentStatus = {
    status: "berhasil",
    transactionId: "628542a4-f412-4c2f-86cf-63ecec04bbb5",
    paidAt: "09-10-2026"
}

const pendingPayment: PaymentStatus = {
    status: "menunggu",
    expiredAt: "10-10-2026"
}

const refundPayment: PaymentStatus = {
    status: "refund",
    amount: 1000000,
    processedAt: "11-10-2026"
}

const canceledPayment: PaymentStatus = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: false
}
const canceledPaymentCanRetry: PaymentStatus = {
    status: "gagal",
    reason: "Tidak jadi membeli",
    canRetry: true
}

function getStatusLabel<T>(payment: PaymentStatus): string {
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

// SOAL 2
// Buat discriminated union untuk notifikasi:
// - { type: "info"; message: string }
// - { type: "warning"; message: string; action: string }
// - { type: "error"; message: string; code: number; canDismiss: boolean }
// - { type: "success"; message: string; duration: number }
//
// Buat fungsi showNotification(notif: Notification): void
// yang console.log pesan berbeda untuk setiap type

interface NotifInfo {
    type: "info";
    message: string;
}

interface NotifWarning {
    type: "warning";
    message: string;
    action: string;
}

interface NotifError {
    type: "error";
    message: string;
    code: number;
    canDismiss: boolean;
}

interface NotifSuccess {
    type: "success";
    message: string;
    duration: number;
}

type Notification = NotifSuccess | NotifError | NotifWarning | NotifInfo;

const successNotification: Notification = {
    type: "success",
    message: "Pesan Berhasil terkirim",
    duration: 5
}

const errorNotification: Notification = {
    type: "error",
    message: "Pesan tidak ditemukan",
    code: 404,
    canDismiss: true
}

const warningNotification: Notification = {
    type: "warning",
    message: "Peringatan pesan harus diisi",
    action: "Fill Required Field"
}

const infoNotification: Notification = {
    type: "info",
    message: "Terdapat pesan terbaru"
}

function showNotification<T>(notif: Notification): void {
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

// SOAL 3 (bonus)
// Buat discriminated union untuk perintah CLI sederhana:
// - { command: "add"; item: string }
// - { command: "remove"; id: number }
// - { command: "list"; filter?: string }
// - { command: "clear" }
//
// Buat fungsi executeCommand(cmd: CLICommand): string
// dan tambahkan exhaustiveness check dengan assertNever

interface CmdClear {
    command: "clear"
}

interface CmdAdd {
    command: "add";
    item: string
}

interface CmdList {
    command: "list";
    filter?: string
}

interface CmdRemove {
    command: "remove";
    id: number
}

type CliCommand =
    CmdAdd
    | CmdClear
    | CmdList
    | CmdRemove

function assertNever(x: never): never {
    throw new Error(`Cli command tidak valid: \n${JSON.stringify(x, null, 2)}`);
}

function executeCommand<T>(cmd: CliCommand): string {
    switch (cmd.command) {
        case "clear":
            return `berhasil menghapus semua data`;
        case "add":
            return `berhasil menambahkan data\n${JSON.stringify(cmd.item, null, 2)}`;
        case "remove":
            return `berhasil menghapus data dengan\nid: ${ cmd.id }`;
        case "list":
            return `berhasil mengambil semua data dengan filter:\n${JSON.stringify(cmd.filter, null, 2)}`;
        default:
            assertNever(cmd);
    }
}

const dataKeuangan: CliCommand = {
    command: "list",
    filter: "status: aktif",
}

console.log(executeCommand(dataKeuangan));