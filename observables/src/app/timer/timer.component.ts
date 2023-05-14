import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  videoSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    // Timer takes two args
    // 1st arg :- delay, which signifies that post this much delay timer will start sending events
    // 2nd arg :- interval, After the particular delay it will keep emitting data for this interval until unsubscribed.
    const broadCastVideo = timer(5000, 1000);

    let count = 0;
    // Assigning this subscription into a variable
    this.videoSubscription = broadCastVideo.subscribe((res) => {
      count++;
      console.log(count);

      // Then unsubscribe the particular subscription at a particular time.
      if(count >=5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }
}
