import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    // Using this retry operator we can call the same request again and again for specific time
    // this request will be called 4 times if it doesn't be successfull
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      retry(4)
    ).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    
    // retryWhen operator can be used to retry the api request on the basis of particular condition like in the following example we are piping the error and retrying the request again after a delay of 3 seconds. Other than that we are using scan operator to manage the retrycount and checking that how many times we will be retrying.
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount: any) => {
          if(retryCount >= 5) {
            throw err;
          } else {
            retryCount = retryCount + 1;
            console.log('retrycount  ' + retryCount);
          }
        }, 0)
      ))
    ).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
