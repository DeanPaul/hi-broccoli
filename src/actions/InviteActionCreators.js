import ActionTypes from '../constants/ActionTypes';
import { sendInviteService } from '../services/InviteService';

export function sendInvite( name, email ) {
    return {
        promise: sendInviteService(name, email),
        types: [
            ActionTypes.INVITE_SEND_INVITE_PENDING,
            ActionTypes.INVITE_SEND_INVITE_SUCCESS,
            ActionTypes.INVITE_SEND_INVITE_ERROR
        ]
    };
}

export const showModal = () => ({ type: ActionTypes.INVITE_SHOW_MODAL });
export const hideModal = () => ({ type: ActionTypes.INVITE_HIDE_MODAL });
export const resetModal = () => ({ type: ActionTypes.INVITE_RESET_MODAL });