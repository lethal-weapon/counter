import {ActionTypes} from '../Constants';
import {INITIAL_DATA} from '../InitialData';

export const CounterReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COUNTER_SIZE:
      return {...storeData, counterSize: action.payload}

    case ActionTypes.INCREMENT_COUNTER_SUM:
      return {...storeData, counterSum: storeData.counterSum + 1}

    case ActionTypes.DECREMENT_COUNTER_SUM:
      return {...storeData, counterSum: storeData.counterSum - 1}

    case ActionTypes.RESET_COUNTER_SUM:
      return {...storeData, counterSum: 0}

    default:
      return storeData || INITIAL_DATA;
  }
}
