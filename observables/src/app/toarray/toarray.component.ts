import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent implements OnInit {
  subscription: Subscription = new Subscription();

  users = [
    {
      name: 'Agam',
      skills: 'HTML/CSS'
    },
    {
      name: 'Jain',
      skills: 'Angular'
    },
    {
      name: 'Shibbu',
      skills: 'React'
    }
  ]

  ngOnInit(): void {
    // By default interval creates a strema of numbers starting from 0
    const source1 = interval(1000);

    // Pipe() is used in rxjs  observables to pipe the response into the particular method. Most of the methods in angular js is now written in pipe() only.
    // Here take method is used to take values till 5 and push them into the array. Ones 5 values are pushed into the array the observer is subscribed and response is logged into the array.
    source1
    .pipe(take(5),toArray())
    .subscribe((res) => {
      console.log(res);
    });

    // From converts the array into stream.
    const source2 = from(this.users);

    // toArray converts stream again into the array
    source2
    .pipe(toArray())
    .subscribe((data) => {
      console.log(data);
    });


    
  }
}
