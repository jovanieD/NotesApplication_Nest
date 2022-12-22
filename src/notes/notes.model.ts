export interface Notes {
    id : number,
    title : string,
    description : string,
    status: NotesStatus
}
export enum NotesStatus{
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE ="DONE"

}