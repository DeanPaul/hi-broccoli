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
export const validateName = (name) => name !== "";

export const validateEmailConfirm = (email, emailConfirm) => email === emailConfirm;

export const validateEmail = (email) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
