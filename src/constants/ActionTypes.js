function keyMirror(obj) {
    Object.keys(obj).forEach(key => Object.assign(obj, {[key]: key}));
    return obj;
}

const ActionTypes = keyMirror({


    INVITE_SHOW_MODAL: null,
    INVITE_HIDE_MODAL: null,
    INVITE_RESET_MODAL: null,
    INVITE_SAVE_INPUT: null,
    INVITE_VALIDATE_INPUT:null,
    INVITE_SEND_INVITE_PENDING: null,
    INVITE_SEND_INVITE_SUCCESS: null,
    INVITE_SEND_INVITE_ERROR: null,

});

export default ActionTypes;
