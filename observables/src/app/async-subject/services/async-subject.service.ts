import { Injectable } from "@angular/core";
import { AsyncSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AsyncSubjectService {
    
    asyncVideoEmit = new AsyncSubject();

    constructor() {}
}