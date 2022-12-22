"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const notes_model_1 = require("./notes.model");
const typeorm_1 = require("@nestjs/typeorm");
const note_entity_1 = require("./note.entity");
const typeorm_2 = require("typeorm");
let NotesService = class NotesService {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    async getAllNotes() {
        try {
            const result = await this.noteRepository.find();
            return result;
        }
        catch (error) {
        }
    }
    async getOneNote(id) {
        try {
            const note = await this.noteRepository.findOneBy({ id });
            if (!note) {
                throw new common_1.NotFoundException("Note not found!");
            }
            return note;
        }
        catch (error) {
        }
    }
    async createNote(createNote) {
        try {
            const newNote = this.noteRepository.create(Object.assign(Object.assign({}, createNote), { status: notes_model_1.NotesStatus.OPEN, createdDate: new Date() }));
            const result = await this.noteRepository.save(newNote);
            return result;
        }
        catch (error) {
        }
    }
    async deleteNote(id) {
        try {
            const result = this.getOneNote(id);
            await this.noteRepository.delete({ id });
        }
        catch (error) {
        }
    }
    async updateNote(id, status) {
        try {
            const note = this.getOneNote(id);
            const result = await this.noteRepository.update({ id }, { status });
            return {
                message: "Successfully Updated!"
            };
        }
        catch (error) {
        }
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map