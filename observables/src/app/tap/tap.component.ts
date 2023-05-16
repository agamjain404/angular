import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  ngOnInit(): void {
    const users = [
      {
        "name": "John",
        "id": 1,
        "gender": "male"
      },
      {
        "name": "Emma",
        "id": 2,
        "gender": "female"
      },
      {
        "name": "Michael",
        "id": 3,
        "gender": "male"
      },
      {
        "name": "Sophia",
        "id": 4,
        "gender": "female"
      },
      {
        "name": "David",
        "id": 5,
        "gender": "male"
      },
      {
        "name": "Olivia",
        "id": 6,
        "gender": "female"
      },
      {
        "name": "Daniel",
        "id": 7,
        "gender": "male"
      },
      {
        "name": "Ava",
        "id": 8,
        "gender": "female"
      },
      {
        "name": "Matthew",
        "id": 9,
        "gender": "male"
      },
      {
        "name": "Isabella",
        "id": 10,
        "gender": "female"
      },
      {
        "name": "Andrew",
        "id": 11,
        "gender": "male"
      },
      {
        "name": "Mia",
        "id": 12,
        "gender": "female"
      }
    ];

    const obs1 = from(users);

    // Here tap will log Agam Jain before every emittion of data
    // we can use tap anywhere in between to perform some action.
    obs1.pipe(
      tap(data => console.log('Agam Jain')),
      map(data => data.name),
      tap(data => {
        console.log("Unsubsctibe");
        // Can unsubscribe here on the basis of some condition
      })
    ).subscribe((data) => {
      console.log(data);
    })
  }
}
