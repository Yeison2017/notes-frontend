import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAmin', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          tranform: 'scale(0.85)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-botton': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingLeft: '*',
            paddingRight: '*',
          })
        ),
        animate(68),
      ]),

      transition('* => void', [
        animate(
          50,
          style({
            transform: 'scale(1.05)',
          })
        ),
        animate(
          50,
          style({
            transform: 'sacele(1)',
            opacity: 0.75,
          })
        ),
        animate(
          '120ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0,
          })
        ),
        animate(
          '150ms ease-out',
          style({
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            'margin-bottom': 0,
          })
        ),
      ]),
    ]),
    trigger('listAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate('0.2s ease')]),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
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
