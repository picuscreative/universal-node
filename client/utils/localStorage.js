import merge from 'lodash/merge';

/**
 /* Load state from local storage
 /* Used as an alternative to dependencies like redux-persist
*/
export const loadState = (initialState) => {
  if (process.browser) {
    const serializedState = localStorage.getItem('state');
    if (serializedState !== null) {
      const deserializedState = JSON.parse(serializedState);
      return merge({}, initialState, deserializedState);
    }
  }
  return undefined;
};

/**
 /* Save state to local storage
 /* Used as an alternative to dependencies like redux-persist
*/
export const saveState = (state, key) => {
  if (process.browser) {
    const serializedState = JSON.parse(localStorage.getItem('state'));

    localStorage.setItem(key, JSON.stringify(serializedState));
  }
};
