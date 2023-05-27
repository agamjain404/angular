import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ReplaySubjectService {

    // Declaration of Replay subject. 
    videoEmit = new ReplaySubject<string>(5);

    // time limit can also be set here. This will signify that the 5 values emitted in last 3 seconds will be tracked by the subject.
    // videoEmit = new ReplaySubject<string>(5, 3000);
}