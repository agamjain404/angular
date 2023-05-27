import { Component } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
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
