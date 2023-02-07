import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new: boolean = false;

  constructor(
    private _notesService: NotesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params['id']) {
        this.note = this._notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      this._notesService.add(form.value);
    } else {
      this._notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this._router.navigateByUrl('/');
  }

  cancel() {
    this._router.navigateByUrl('/');
  }
}
