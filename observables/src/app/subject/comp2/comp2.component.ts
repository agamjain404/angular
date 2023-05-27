import { Component } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  username: string = 'Agam';

  constructor( private subjectService: SubjectService ) {}

  ngOnInit() {
    this.subjectService.username.subscribe((res) => {
      this.username = res;
    })
  }

  onClick(uname: any) {
    this.subjectService.username.next(uname.value);
  }
}
