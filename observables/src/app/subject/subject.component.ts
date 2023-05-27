import { Component } from '@angular/core';
import { SubjectService } from './service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  // This is the following example of cross component communication that we can subscribe the subject and and also emit the value with the help of next() of subject. And value submitted in textbox is getting reflexted in every component. Please check subject service to check about Behaviour Subject

  username: string = 'Agam';

  constructor( private subjectService: SubjectService ) {}

  ngOnInit() {
    this.subjectService.username.subscribe((res) => {
      this.username = res;
    })
  }
}
