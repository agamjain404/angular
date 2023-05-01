import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // This will work fine because unlike routerLink router.navigate() doesn't know the active link of the page currently. To get that known we need to pass some extra properties. this will route the application to /servers
    this.router.navigate(['servers']);

    // To make a router navigate with relative path we need to add a ActivatedRoute which gives the current route of the page and make the given route relative to the activated route. This will route the application to /servers/servers
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
