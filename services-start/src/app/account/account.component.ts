import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {}


  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}


// Can also inject services like this 
// import { Component, Input, Output, inject } from '@angular/core'; // <- Add inject import
 
// @Component(...)
// export class AccountComponent {
//   // @Input() & @Output() code as shown in the previous lecture
//   private loggingService?: LoggingService; // <- must be added
 
//   constructor() {
//     this.loggingService = inject(LoggingService);
//   }
// }
