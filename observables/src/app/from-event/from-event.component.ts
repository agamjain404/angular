import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent  implements OnInit {
  constructor() {}

  @ViewChild('clickMe') click: ElementRef | any;

  ngOnInit() {

  }

  ngAfterViewInit() {
    // From event is mainly used to return a stream of data using OPbservables.
    // On clicking the respective button event will be emitted and can be subscribed.
    let count = 0;
    fromEvent(this.click.nativeElement, 'click').subscribe((res) => {
      count++;
      this.print(count, 'first');
      this.print(count, 'second');
    });
  }

  print(count: number, containerId: string) {
    const list = document.createElement('li');
    list.innerHTML = 'Video ' + count;

    document.getElementById(containerId)?.appendChild(list);
  }
}
