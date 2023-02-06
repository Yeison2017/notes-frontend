import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;

  constructor(private _notesService: NotesService, private _router: Router) {}

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    this._notesService.add(form.value);
    this._router.navigateByUrl('/');
  }
}
