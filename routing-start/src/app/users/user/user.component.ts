import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    // If there is any changes present in your page that can change your route parametes then we need to subscribe the route parameters observable and update our param values to see the changes in real time. Because angular will not rerender the same component on which user is already present.
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );

    
  }


  // The subscription created above will be destroyed ones you navigate to another component and when you comes back to this  component the angular will recreate this subscription. But if you have created your own observables then you need to do it.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
