export class CounterService {

    activeToInactiveMoves = 0;
    inactiveToActiveMoves = 0;

    moveToInactive() {
        this.activeToInactiveMoves++;
    }

    moveToActive() {
        this.inactiveToActiveMoves++;
    }
}