import {createReducer} from './utils';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    isModalShow: false,
    isSendingInvite: false,
    inviteSuccess: false,
    error:null,
};

export default createReducer(initialState, {

    [ActionTypes.INVITE_SHOW_MODAL]: (state) => ({...state, isModalShow: true}),
    [ActionTypes.INVITE_HIDE_MODAL]: (state) => ({...state, isModalShow: false}),
    [ActionTypes.INVITE_RESET_MODAL]: (state) => ({
        ...state,
        isModalShow: false,
        isSendingInvite: false,
        inviteSuccess: false,
        error:null,
    }),

    [ActionTypes.INVITE_SEND_INVITE_PENDING]: (state) => ({
        ...state,
        isSendingInvite:true,
        error:null,

    }),
    [ActionTypes.INVITE_SEND_INVITE_SUCCESS]: (state, payload) => ({
        ...state,
        isSendingInvite:false,
        error:null,
        inviteSuccess:true
    }),
    [ActionTypes.INVITE_SEND_INVITE_ERROR]: (state, payload) => ({
        ...state,
        isSendingInvite:false,
        error:payload
    }),

});
