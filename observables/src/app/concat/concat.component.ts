import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map((res) => `Tech Video #` + res), take(5));
    const sourceComedy = interval(1000).pipe(map((res) => `Comedy Video #` + res), take(3));
    const sourceNews = interval(1000).pipe(map((res) => `News Video #` + res), take(4));

    const FinalObs = concat(sourceTech, sourceComedy, sourceNews);

    // Final observable will emit firstly sourceTech data then sourceComedy and then sourceNews.
    // Means that concat works synchronously and linearly and concat the data according to the order of observables passed .
    // Visit rxjs marbles website for more clarity
    FinalObs.subscribe((res) => {
      console.log(res);
    })
  }
}
