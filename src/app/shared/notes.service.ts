import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  // notes: Note[] = new Array<Note>();
  notes: Note[] = [
    {
      title: 'Reminder: Staff Meeting Tomorrow',
      body: 'Just a quick reminder that we have a staff meeting scheduled for tomorrow at 10am in the conference room. Please be on time and prepared to discuss the agenda items.',
    },
    {
      title: 'Update: Office Renovations',
      body: 'Good news! The office renovations are ahead of schedule and should be completed by the end of next week. Please bear with us as we put the finishing touches on the space.',
    },
    {
      title: 'Urgent: Security Breach',
      body: 'Attention all employees: We have reason to believe that there has been a security breach in our system. Please change your passwords immediately and report any suspicious',
    },
    {
      title: 'Congratulations: Employee of the Month',
      body: 'We are pleased to announce that Jane Doe has been selected as the Employee of the Month for January. Congratulations, Jane! Your hard work and dedication have not gone unnoticed.',
    },
    {
      title: 'Holiday Schedule Reminder',
      body: 'With the upcoming holiday, please be reminded that the office will be closed on Monday, February 21st. We will resume regular business hours on Tuesday, February 22nd.',
    },
    {
      title: "Don't Forget: Performance Reviews",
      body: 'Just a friendly reminder that performance reviews are due next week. Please complete your self-assessment and schedule a meeting with your manager to discuss your progress and ',
    },
    {
      title: 'Welcome New Hire',
      body: 'Please join us in welcoming our newest team member, John Smith, to the company. John will be joining the marketing department and brings a wealth of experience to the role.',
    },
    {
      title: 'Company Update: Q4 Results',
      body: 'We are pleased to announce that the company exceeded expectations in Q4, with record-breaking revenue and growth. Thank you to all our employees for your hard wor',
    },
    {
      title: 'Volunteer Opportunity: Community Service Day',
      body: 'We are looking for volunteers to participate in our upcoming Community Service Day on Saturday, March 5th. Please sign up in the main office if you are interested in giving back ',
    },
    {
      title: 'Training Reminder: Customer Service',
      body: 'Just a quick reminder that the customer service training session will be held next Wednesday at 2pm in the training room. All employees are required to attend.',
    },
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
