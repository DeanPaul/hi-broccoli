import React, {Component} from "react";
import {bindActionCreators} from "redux";
import createDataProviders from "../../createDataProviders";
import {connect} from 'react-redux';
import * as inviteActionCreators from "../../actions/InviteActionCreators";
import {InviteHeader, InviteContent, InviteFooter, InviteModalContent, Modal} from '../../components';

class HomeController extends Component {


    components = {
        [InviteHeader]: () => {
            return {title: 'BROCCOLI & CO.'};
        },
        [InviteContent]: () => {
            const {showModal} = this.props.inviteActions;
            return {
                word_00: "A better way",
                word_01: "to enjoy every day.",
                word_10: "Be the first to know when we launch.",
                button: {
                    display: "Request an invite",
                    handleClick: showModal
                }
            };
        },
        [InviteFooter]: () => {
            return {
                messageTop: 'Made with  in Melbourne.',
                messageBottom: '@ 2016 Broccoli & Co. All rights reserved.',
            };
        },
        [Modal]: () => {
            const {isModalShow} = this.props.invite;
            const {hideModal} = this.props.inviteActions;
            return {
                show: isModalShow,
                onDismiss: hideModal,
            };
        },
        [InviteModalContent]: () => {
            const {isSendingInvite, inviteSuccess, error, nameClass, emailClass, emailConfirmClass } = this.props.invite;
            const {sendInvite, resetModal, saveInviteInput, validateInput} = this.props.inviteActions;
            const handleSendInvite = () => {
                validateInput();
                sendInvite();
            };

            const handleButtonClick = inviteSuccess ? resetModal : handleSendInvite;
            const buttonOk = {
                display: "OK",
                className: "able",
                handleButtonClick,
                error
            };
            const buttonSend = {
                display: isSendingInvite ? "Sending, please wait." : "Send",
                className: isSendingInvite ? "disabled" : "able",
                handleButtonClick,
                error
            };
            const save = (e) => saveInviteInput(e.target.name, e.target.value);
            const inputs = [
                {name: "name",save, className: nameClass},
                {name: "email", save, className:emailClass},
                {name: "emailConfirm", save, className:emailConfirmClass},
            ];
            const content_text = "You will be the first...";
            return {
                title: inviteSuccess ? "All Done" : "Request on invite",
                content:inviteSuccess? {content_text} : {inputs},
                button: inviteSuccess ? buttonOk : buttonSend
            };
        },
    };

    render() {
        return (
            <div className={this.props.className}>
                {createDataProviders(this.props.children, this.components)}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    invite: state.invite,
});

const mapDispatchToProps = (dispatch) => ({
    inviteActions: bindActionCreators(inviteActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeController);
