import * as fromCounter from './counter';
import { createSelector } from '@ngrx/store';

export interface State {

  counter: fromCounter.State;


}

export const reducers = {
  counter: fromCounter.reducer


};


//Selectors

//1.

//2. Create a memoized selector fro each branch of the state

const selectCounterBranch = (state: State) => state.counter;

export const selectCurrent = createSelector(selectCounterBranch, c => c.count);

export const selectCountingBy = createSelector(selectCounterBranch, c => c.by);


//start doing the homework
export const selectAtStart = createSelector(selectCurrent, selectCountingBy, (c, b) => (c - b) < 0);
//export const selectAtStart = createSelector(selectCurrent, c => c === 0);
export const selectResetDisabled = createSelector(selectCurrent, c => c === 0);
