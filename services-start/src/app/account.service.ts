import { Injectable } from "@angular/core";

// This decorator is used whenever you want a service to be injected inside a service. Now if AccountService is using another service in its class then we need to add this decorator on AccountService. It is not required on the class of the service being injected but it is required on the service which is using another service. Other than this in newer versions of angular it is recommended to use @Injectable() decorator on all the services whether we are injecting any service or not in it. Might be they will add a feature around it in some time. So, they want us to make a habit of it.
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    addAccount(name: string, status: string) {
        this.accounts.push({name, status});
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }
}