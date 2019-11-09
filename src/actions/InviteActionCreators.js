import ActionTypes from '../constants/ActionTypes';
import {sendInviteService} from '../services/InviteService';

export const sendInvite = () => (dispatch, getState) => {
    if(!(getState().invite.nameClass === "border-red" || getState().invite.emailClass === "border-red" || getState().invite.emailConfirmClass === "border-red"))
        dispatch({
            promise: sendInviteService(getState().invite.name, getState().invite.email),
            types: [
                ActionTypes.INVITE_SEND_INVITE_PENDING,
                ActionTypes.INVITE_SEND_INVITE_SUCCESS,
                ActionTypes.INVITE_SEND_INVITE_ERROR
            ]
        })
};

export const showModal = () => ({type: ActionTypes.INVITE_SHOW_MODAL});
export const hideModal = () => ({type: ActionTypes.INVITE_HIDE_MODAL});
export const resetModal = () => ({type: ActionTypes.INVITE_RESET_MODAL});
export const saveInviteInput = (name, value) => ({type: ActionTypes.INVITE_SAVE_INPUT, payload:{name, value}});
export const validateInput = () => ({type: ActionTypes.INVITE_VALIDATE_INPUT});
