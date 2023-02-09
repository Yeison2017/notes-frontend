import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  // notes: Note[] = new Array<Note>();
  notes: Note[] = [
    { title: 'Title 1', body: 'body 1' },
    { title: 'asdfsdf 2', body: 'body 2' },
    { title: 'basdah 3', body: 'body 3' },
    { title: 'cfgsad 4', body: 'body 4' },
    { title: 'dgdfsd 5', body: 'body 5' },
    { title: 'ahvwef 6', body: 'body 6' },
    { title: 'bdfhag 7', body: 'body 7' },
    { title: 'Title 7', body: 'body 7' },
    { title: 'Title 7', body: 'body 7' },
    { title: 'Title 7', body: 'body 7' },
    { title: 'Title 7', body: 'body 7' },
    { title: 'Title 7', body: 'body 7' },
  ];

  constructor() {}

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
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }
}
