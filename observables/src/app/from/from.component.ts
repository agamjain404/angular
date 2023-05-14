import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  ngOnInit(): void {

    // Using from these array items will be converted into streams and all the data present inside the array will be emitted one by one
    const obs1 = from([10, 20, 30]);

    obs1.subscribe((data) => {
      console.log(data);
    });

    // Passing promisess
    const promise1  = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve('Promise resolved');
      }, 3000);
    });

    // At a time you can pass only one promise without enclosing it in any array
    const obs2 = from(promise1);

    obs2.subscribe((data) => {
      console.log(data);
    })
    

    // Converting a string to observable using from()
    // It will basically distort every character and pass it as a data stream
    const obs3 = from('Welcome to angular Rxjs');

    obs3.subscribe((data) => {
      console.log(data);
    })
  }
}
