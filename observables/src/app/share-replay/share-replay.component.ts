import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  allProducts: Observable<any> | any;

  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((res) => {
      console.log(res)
    });
  }
}
 