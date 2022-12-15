"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const notes_model_1 = require("../notes/notes.model");
class NotesStatusValidationPipe {
    transform(value, metadata) {
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is not a valid status`);
        }
        return value;
    }
    isStatusValid(status) {
        return Object.values(notes_model_1.NotesStatus).includes(status.toUpperCase());
    }
}
exports.NotesStatusValidationPipe = NotesStatusValidationPipe;
//# sourceMappingURL=notes-status-validation.pipes.js.map