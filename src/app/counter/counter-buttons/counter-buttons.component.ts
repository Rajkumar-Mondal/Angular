import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent {

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  public onIncrement() {
    this.store.dispatch(increment())
  }

  public onDecrement() {
    this.store.dispatch(decrement())
  }

  public onReset() {
    this.store.dispatch(reset())
  }
}
