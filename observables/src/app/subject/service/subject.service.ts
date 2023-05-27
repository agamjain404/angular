import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SubjectService {
    
    username = new Subject<string>();

    // Behavior subject has one super functionality that we can give default value inside behaviour subject post giving default value here we don't need to give any default value to any other variable declared in any component. This default value will be automatically got set in those variables.
    // username = new BehaviorSubject<string>('Agam');

    constructor() {}
}