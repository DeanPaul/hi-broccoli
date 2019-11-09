import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import {PromiseMiddleware} from '../middlewares/PromiseMiddleware';

/**
 * Creates a redux store with middleware and reducers using an initial state
 * @param  {object} initialState - Initial state for the store
 * @return {object} store - The created store
 */
export default function configureStore(initialState) {
    const store = compose(
        applyMiddleware(
            thunk,
            PromiseMiddleware
        )
    )(createStore);

    return store(reducer, initialState);
}
