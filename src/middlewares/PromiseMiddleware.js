const isPromise = (obj) => obj && typeof obj.then === 'function';


export const PromiseMiddleware = ({dispatch, getState}) => next => action => {
    const {types, promise, ...rest} = action;
    if (!isPromise(promise) || !(types && types.length === 3)) {
        return next(action);
    }
    const [PENDING, DONE, FAIL] = types;
    dispatch({...rest, type: PENDING});
    return promise.then(
        (response) => dispatch({...rest, payload: response, type: DONE}),
        (error) => dispatch({type: FAIL, payload: {code: error && error.code, message: error && error.message}})
    )
};
