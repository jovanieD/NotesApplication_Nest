"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const notes_model_1 = require("./notes.model");
let NotesService = class NotesService {
    constructor() {
        this.notes = [
            {
                id: "123fwr11qe",
                title: "vanie",
                description: "vanie123",
                status: notes_model_1.NotesStatus.OPEN
            },
            {
                id: "24sadf4tf4",
                title: "dasian",
                description: "dasian123",
                status: notes_model_1.NotesStatus.OPEN
            }
        ];
    }
    getAllNOtes(filterDto) {
        const { status, search } = filterDto;
        let notes = this.notes;
        if (status) {
            notes = notes.filter(x => x.status === status);
        }
        if (search) {
            notes = notes.filter(x => x.title.includes(search) || x.description.includes(search));
        }
        return notes;
    }
    getOneNote(id) {
        const note = this.notes.find(note => note.id == id);
        if (!this.notes) {
            throw new common_1.NotFoundException();
        }
        return note;
    }
    createNote(note) {
        const { title, description } = note;
        const newNote = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            status: notes_model_1.NotesStatus.OPEN
        };
        this.notes.push(newNote);
        return newNote;
    }
    updateNote(id, title, status) {
        const note = this.getOneNote(id);
        note.title = title;
        note.status = status;
        return note;
    }
    deleteNote(id) {
        const result = this.getOneNote(id);
        this.notes = this.notes.filter(note => note.id !== result.id);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map