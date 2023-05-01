import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    // Retrieving query params and fragments
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // We can also subscribe to queryparams and fragments
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);

    this.route.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    })
    
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
