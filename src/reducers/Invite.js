import {createReducer, validateName, validateEmail, validateEmailConfirm} from './utils';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    isModalShow: false,
    isSendingInvite: false,
    inviteSuccess: false,
    error:null,
    name:"",
    email:"",
    emailConfirm:"",
    nameClass:"",
    emailClass:"",
    emailConfirmClass:"",
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
        name:"",
        email:"",
        emailConfirm:"",
        nameClass:"",
        emailClass:"",
        emailConfirmClass:"",
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
    [ActionTypes.INVITE_SAVE_INPUT]: (state, payload) => ({
        ...state,
        [payload.name]:payload.value //... bad
    }),
    [ActionTypes.INVITE_VALIDATE_INPUT]: (state) => ({
        ...state,
        nameClass: validateName(state.name) ? "" : "border-red",
        emailClass:validateEmail(state.email) ? "" : "border-red",
        emailConfirmClass:validateEmailConfirm(state.email,state.emailConfirm) ? "" : "border-red",
    }),

});
