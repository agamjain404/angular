import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit{
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
