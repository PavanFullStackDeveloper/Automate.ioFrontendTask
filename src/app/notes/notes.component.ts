// Angular imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Declarations
declare var $: any;

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styles: []
})
export class NotesComponent implements OnInit {
    // Form Group Variables
    noteFG: FormGroup;

    // Angular Variables
    notes: Array<object> = [];
    noteObjId: number = 0;
    notesSearchQuery: any = null;
    selectedNote: object = null;
    selectedNoteId: number = null;

    /**
     * Constructor
     * **************************************************
     */
    constructor() {
        // Note Form Group Declaration
        this.noteFG = new FormGroup({
            Title: new FormControl(null, [Validators.required]),
            Desc: new FormControl(null, [Validators.required])
        });
    }

    /**
     * NgOnInit
     * **************************************************
     */
    ngOnInit() {
        if (localStorage.getItem('Notes')) {
            this.notes = JSON.parse(localStorage.getItem('Notes'));
            this.noteObjId = Array.isArray(this.notes) ? this.notes.length : 0;

            if (Array.isArray(this.notes)) {
                if (this.notes.length) {
                    const note: object = this.notes[0];
                    this.selectNote(note['Id'], note);
                }
            }
        } else {
            this.notes = [];
            this.noteObjId = 0;
        }
    }

    /**
     * Click Functions
     * **************************************************
     */
    // Toggle Notes Sidebar
    toggleNotesSidebar() {
        $('.notes-wrap').toggleClass('notes-wrap-sidebar-open notes-wrap-sidebar-close');
    }
    // Delete Note
    deleteNote() {
        if (this.selectedNoteId !== null) {
            const ind: number = this.notes.findIndex((item) => { return item['Id'] === this.selectedNoteId });

            this.notes.splice(ind, 1);

            if (this.notes.length) {
                const note: object = this.notes[0];
                this.selectNote(note['Id'], note);
            }

            localStorage.setItem('Notes', JSON.stringify(this.notes));
        }
    }
    // Create Note
    createNote() {
        this.noteObjId++;
        this.notes.unshift({ "Id": this.noteObjId, "Title": "New Note", "Time": new Date(), "Desc": "New Note Description" });

        const note: object = this.notes[0];
        this.selectNote(note['Id'], note);

        localStorage.setItem('Notes', JSON.stringify(this.notes));
    }
    // Select Note
    selectNote(id: number, note: object) {
        this.selectedNote = note;
        this.selectedNoteId = id;

        if (note['Title'] == "New Note") {
            this.noteFG.controls['Title'].reset();
        } else {
            this.noteFG.controls['Title'].reset(note['Title']);
        }

        if (note['Desc'] == "New Note Description") {
            this.noteFG.controls['Desc'].reset();
        } else {
            this.noteFG.controls['Desc'].reset(note['Desc']);
        }
    }

    /**
     * Change Functions
     * **************************************************
     */
    // Note Title
    noteTitleChange() {
        const title: string = this.noteFG.controls['Title'].value;

        if (!(this.selectedNote == null && this.selectedNoteId == null)) {
            if (title == null || title == "") {
                this.selectedNote['Title'] = "New Note";
            } else {
                this.selectedNote['Title'] = title;
            }

            this.selectedNote['Time'] = new Date();

            const ind: number = this.notes.findIndex((item) => { return item['Id'] === this.selectedNoteId });
            this.notes[ind] = this.selectedNote;

            localStorage.setItem('Notes', JSON.stringify(this.notes));
        }
    }
    // Note Description
    noteDescChange() {
        const desc: string = this.noteFG.controls['Desc'].value;

        if (!(this.selectedNote == null && this.selectedNoteId == null)) {
            if (desc == null || desc == "") {
                this.selectedNote['Desc'] = "New Note Description";
            } else {
                this.selectedNote['Desc'] = desc;
            }

            this.selectedNote['Time'] = new Date();

            const ind: number = this.notes.findIndex((item) => { return item['Id'] === this.selectedNoteId });
            this.notes[ind] = this.selectedNote;

            localStorage.setItem('Notes', JSON.stringify(this.notes));
        }
    }
}
