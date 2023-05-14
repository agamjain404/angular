import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{
  ngOnInit(): void {
    const users = [
      {
        name: 'Agam',
        skill: 'Angular',
        job: {
          title: 'Angular Developer'
        }
      },
      {
        name: 'Anurag',
        skill: 'Node JS',
        job: {
          title: 'Node Js Developer'
        }
      },
      {
        name: 'Ram',
        skill: 'Automation',
        job: {
          title: 'Automation Developer'
        }
      }
    ];

    const obs = from(users);

    // Pluck operator is used to extract the value of particular property from a object emitted by the observer.
    const subs = obs.pipe(
      pluck('name'),
      toArray()
    ).subscribe((data) => {
      console.log(data);
    })

    // To extract value of the nested property
    const subs2 = obs.pipe(
      pluck('job', 'title'),
      toArray()
    ).subscribe((data) => {
      console.log(data);
    })
  }
}
