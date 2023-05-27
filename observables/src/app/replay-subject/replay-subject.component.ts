import { Component, OnInit } from '@angular/core';
import { ReplaySubjectService } from './service/replay-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  constructor(
    private replaySubjectService: ReplaySubjectService
  ) {

  }

  userList1: string[] = [
    'Angular 1',
    'Angular 2'
  ];

  userList2: string[] = [];
  userList3: string[] = [];

  subscribedUserList2: boolean = false;
  subscribedUserList3: boolean = false;

  subscription2: Subscription | any;
  subscription3: Subscription | any;

  ngOnInit(): void {
    this.replaySubjectService.videoEmit.subscribe((res) => {
      this.userList1.push(res);
    })
  }

  onVideoAdd(video: any) {
    this.replaySubjectService.videoEmit.next(video);
  }

  userSubscribe1() {
    if(this.subscribedUserList2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.replaySubjectService.videoEmit.subscribe((res) => {
        this.userList2.push(res);
      });
    }
    this.subscribedUserList2 = !this.subscribedUserList2;
  }

  userSubscribe2() {
    if(this.subscribedUserList3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.replaySubjectService.videoEmit.subscribe((res) => {
        this.userList3.push(res);
      });
    }
    this.subscribedUserList3 = !this.subscribedUserList3;
    
  }
}
