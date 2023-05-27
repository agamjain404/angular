import { Component, OnInit } from '@angular/core';
import { interval, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  ngOnInit(): void {
    const source1 = interval(2000).pipe(take(5));
    const source2 = interval(1500).pipe(take(5));

    zip(source1, source2).subscribe(([res1, res2]) => {
      console.log(res1);
      console.log(res2);
    })

  }
}
