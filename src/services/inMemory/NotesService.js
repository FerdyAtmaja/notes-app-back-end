const { nanoid } = require('nanoid');

class NotesService {
    constructor() {
        this.notes = [];
    }

    addNote({title, body, tags}){
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newNote = {
            title, tags, body, id, createdAt, updatedAt,
        }

        this._notes.push(newNote);

        const isuccess = this._notes.find((note) => note.id === id).length > 0;

        if (!isSuccess){
            throw new Error('Catatan gagal ditambahkan');
        }

        return id;
    }

    getNotes() {
        return this.notes;
    }

    getNoteById(id) {
        const note = this.notes.find((n) => n.id === id);
    }

    editNoteById(id, {title, body, tags}){
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
        }

        const updatedAt = new Date().toISOString();
        this._notes[index] = { ...this._notes[index], title, body, tags, updatedAt };
    }

    deleteNoteById(id) {
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new Error('Catatan gagal dihapus. Id tidak ditemukan');
        }

        this._notes.splice(index, 1);
    }
}

module.exports = NotesService;