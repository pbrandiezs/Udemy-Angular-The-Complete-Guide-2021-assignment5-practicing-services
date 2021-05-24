import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    activeToInactiveMoves = 0;
    inactiveToActiveMoves = 0;

    constructor() {}

    moveToInactive() {
        this.activeToInactiveMoves++;
    }

    moveToActive() {
        this.inactiveToActiveMoves++;
    }
}