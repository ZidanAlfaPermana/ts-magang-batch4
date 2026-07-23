// STUDI KASUS: Sistem Manajemen Tugas (Task Manager)
//
// Buat sistem yang mengelola tugas dengan menggunakan:
// - Interface (Task, User, Project)
// - Type alias (TaskStatus, Priority)
// - Optional & readonly properties
// - Union types
// - Discriminated union (untuk TaskEvent)

// LANGKAH 1 — Definisikan tipe-tipenya:
type TaskStatus = "todo" | "in_progress" | "done" | "cancelled";
type Priority = "low" | "medium" | "high" | "urgent";

interface User {
    readonly id: number;
    nama: string;
    email: string;
}

const Zidan: User = {
    id: 1,
    nama: "Zidan Alfa Permana",
    email: "zidanalfa18@gmail.com"
}

interface Task {
    readonly id: number;
    judul: string;
    deskripsi?: string;
    status: TaskStatus;
    prioritas: Priority;
    assignee?: User;
    deadline?: string;
    createdAt: string;
}

const Task1: Task = {
    id: 1,
    judul: "Menulis buku cerita",
    deskripsi: "Jangan lupa capslock awal pada paragraf pertama",
    status: "todo",
    prioritas: "medium",
    assignee: Zidan,
    createdAt: "07-23-2026"
}
const Task2: Task = {
    id: 2,
    judul: "Membuat project laravel",
    deskripsi: "Structure file nya. jangan lupa ditambah Services untuk semua logika ngambil data",
    status: "in_progress",
    prioritas: "high",
    assignee: Zidan,
    createdAt: "07-23-2026"
}

const ListAllTaks: Task[] = [
    Task1,
    Task2
]

// LANGKAH 2 — Buat discriminated union untuk TaskEvent:
// - { type: "created"; task: Task }
// - { type: "updated"; taskId: number; changes: Partial<Task> }
// - { type: "completed"; taskId: number; completedAt: string }
// - { type: "deleted"; taskId: number; reason: string }

type TaskEvent =
    { type: "created"; task: Task }
    | { type: "updated"; taskId: number; changes: Partial<Task> }
    | { type: "deleted"; taskId: number; reason: string }
    | { type: "completed"; taskId: number; completedAt: string }

// LANGKAH 3 — Buat interface TaskManager:
// - tasks: Task[]
// - tambahTask(task: Omit<Task, "id" | "createdAt">): Task
// - updateStatus(id: number, status: TaskStatus): Task | undefined
// - getByPrioritas(prioritas: Priority): Task[]
// - getByAssignee(userId: number): Task[]
interface TaskManager {
    tasks: Task[];
    tambahTask(task: Omit<Task, "id" | "createdAt">): Task;
    updateStatus(id: number, status: TaskStatus): Task | undefined;
    getByPrioritas(prioritas: Priority): Task[];
    getByAssignee(userId: number): Task[];
}

// LANGKAH 4 — Implementasikan TaskManager
// dan buat minimal 5 task dengan berbagai status dan prioritas
const PengelolaanTask: TaskManager = {
    tasks: ListAllTaks,
    tambahTask(task: Omit<Task, "id" | "createdAt">): Task {
        const generateId = Math.floor(Math.random());
        const dateNow = Date.now();
        const data: Task = {
            id: generateId,
            judul: task.judul,
            ...(task.deskripsi && { deskripsi: task.deskripsi }),
            status: task.status,
            prioritas: task.prioritas,
            ...(task.assignee && { assignee: task.assignee }),
            ...(task.deadline && { deadline: task.deadline }),
            createdAt: new Date(dateNow).toString()
        };
        this.tasks.push(data);
        return data;
    },
    updateStatus(id: number, status: TaskStatus): Task | undefined {
        const data = this.tasks.find(task => task.id === id);
        if (data?.status !== undefined) {
            data.status = status;
            return data;
        }
        return undefined;
    },
    getByPrioritas(prioritas: Priority): Task[] {
        return this.tasks.filter(task => task.prioritas === prioritas);
    },
    getByAssignee(userId: number): Task[] {
        return this.tasks.filter(task => task.assignee?.id === userId);
    }
}

const Task3: Task = {
    id: 0,
    judul: "Membuat project laravel",
    deskripsi: "Structure file nya. jangan lupa ditambah Services untuk semua logika ngambil data",
    status: "done",
    prioritas: "high",
    assignee: Zidan,
    createdAt: ""
}

PengelolaanTask.tambahTask(Task3);
console.log("Pengecekan data setelah di tambah")
console.log(PengelolaanTask.tasks);
console.log("ambil semua data dengan assignee");
console.log(PengelolaanTask.getByAssignee(1));
console.log("ambil semua data dengan prioritas");
console.log(PengelolaanTask.getByPrioritas("high"));
PengelolaanTask.updateStatus(2, "todo");
console.log("Pengecekan data setalah salah satu data di update");
console.log(PengelolaanTask.tasks);

// LANGKAH 5 — Buat fungsi logEvent(event: TaskEvent): void
// yang menampilkan pesan berbeda untuk setiap type event
function logEvent(event: TaskEvent) {
    console.log(JSON.stringify(event));
}