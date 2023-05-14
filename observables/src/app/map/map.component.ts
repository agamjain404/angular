import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  implements OnInit { 
  constructor () {}

  ngOnInit(): void {
    
    const obs1 = interval(1000);

    // This is how using map we can transform the data emitted before subscriibing it one by one.
    const subs1 = obs1
                  .pipe(
                    map(data => data*10)
                  ).subscribe((data) => {
                    console.log(data);

                    if(data >= 100) {
                      subs1.unsubscribe();
                    }
                  });


    // Using map with objects
    // Returning names only
    const members = [
      {
        name: "Agam",
        skill: "HTML"
      },
      {
        name: "Arpit",
        skill: "AWS"
      },
      {
        name: "Akshat",
        skill: "Azure"
      }
    ];

    const obs2 = from(members);

    obs2.pipe(map(data => data.name)).subscribe((data) => {
      console.log(data);
    });
  }
}
