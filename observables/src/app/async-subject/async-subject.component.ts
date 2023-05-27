import { Component, OnInit } from '@angular/core';
import { AsyncSubjectService } from './services/async-subject.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoText: string | any = '';

  constructor(
    private asyncSubjectService: AsyncSubjectService
  ) {}

  ngOnInit(): void {
    // Here the last value emitted by async video will only be subscribed ones subscription is completed.
    this.asyncSubjectService.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoText = res;
    })
  }

  onVideoAdd(value: any) {
    this.asyncSubjectService.asyncVideoEmit.next(value);
  }

  onCompleteSubscription() {
    this.asyncSubjectService.asyncVideoEmit.complete();
  }
}
