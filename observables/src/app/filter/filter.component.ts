import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor () {}

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

    // Filter the data with name length greater than 6
    obs1.pipe(filter(data => data.name.length > 6), toArray() )
        .subscribe((data) => {
          console.log(data);
        });
    
    // Filter the data with gender male
    obs1.pipe(filter(data => data.gender === 'male'), toArray())
        .subscribe((data) => {
          console.log(data);
        });
    
    // Filter the data with id greater than equal to 5
    obs1.pipe(filter(data => data.id >= 5), toArray())
        .subscribe((data) => {
          console.log(data);
        })
    
  }
}
