import {ActionTypes} from '../Constants';

export const updateCounterSize = (newSize) => ({
  type: ActionTypes.UPDATE_COUNTER_SIZE,
  payload: newSize
})

export const incrementCounterSum = () => ({
  type: ActionTypes.INCREMENT_COUNTER_SUM
})

export const decrementCounterSum = () => ({
  type: ActionTypes.DECREMENT_COUNTER_SUM
})

export const resetCounterSum = () => ({
  type: ActionTypes.RESET_COUNTER_SUM
})
