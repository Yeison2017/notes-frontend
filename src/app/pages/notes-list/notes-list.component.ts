import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private _notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this._notesService.getAll();
  }

  deleteNote(id: number) {
    this._notesService.delete(id);
  }
}
