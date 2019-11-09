/**
 * Convert declarative reducer to standard reducer
 * @function createReducer
 * @access public
 * @param {Object} initialState
 * @param {Object} reducerMap
 * @returns {Object}
 */
export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action.payload, action.meta) : state;
    };
}
