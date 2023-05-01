import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // We should provide the service to get the instance of particular service in current file. Providers can also be added in app.module.ts files
  // AccountService instance is also used in app component. So, the instance used here and in app component is different and because of this we are not able to see the real time changes. To overcome this we can remove AccountService instance from child component and use it from Parent itself. We don't need to provide AccountService here as it is already used in parent. And the child can use the same instance from parent. Now if we are using another instance for Child then there will not be a sync in both the instances and it may cause errors
  providers: [LoggingService]
})
export class NewAccountComponent {

  // Binding service to another class in angular to reuse its method.
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    
    this.loggingService.logStatusChange(accountStatus);
  }
}
