import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];

  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes')!) || [];
  }

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    this.saveLocalStorage();
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
    this.saveLocalStorage();
  }

  delete(id: number) {
    this.notes.splice(id, 1);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
