import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  videoSubscription: Subscription = new Subscription();

  ngOnInit() {
    // Here interval method provides us data in every 1 second
    const broadCastVideo = interval(1000);

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
