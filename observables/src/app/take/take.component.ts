import { Component, OnInit } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit{
  ngOnInit(): void {
    const source = [
      'Agam',
      'Akshat',
      'Arpit',
      'Ritik',
      'Nishchay',
      'Tushar',
      'Saurabh',
      'Chirag'
    ];

    const obs1 = from(source);

    // Take is used to get data emitted for the first n(argument) times. Post that it will not subscribe the data emitted
    obs1.pipe(
      take(5)
    ).subscribe((data) => {
      console.log(data);
    });

    // Take last is used to get data emitted lastly for the n arguments. Before that it will not subscribe the data emitted.
    // So, last 3 elements will be subscribed and logged on to the console.
    obs1.pipe(
      takeLast(3)
    ).subscribe((data) => {
      console.log(data);
    });
    
    // take until is used to extract the data until the observable passed in it has not emitted any kind of data;
    const obs2 = interval(1000);
    const time = timer(5000);

    obs2.pipe(
      takeUntil(time)
    ).subscribe((data) => {
      console.log(data);
    })
  }
}
