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
            const {inviteName, inviteEmail, isSendingInvite, inviteSuccess, error} = this.props.invite;
            const {sendInvite, resetModal} = this.props.inviteActions;
            const handleSendInvite = () => sendInvite(inviteName, inviteEmail);

            const handleButtonClick = inviteSuccess ? resetModal : handleSendInvite;
            const button_ok = {
                display: "OK",
                className: "able",
                handleButtonClick,
                error
            };
            const button_send = {
                display: isSendingInvite ? "Sending, please wait." : "Send",
                className: isSendingInvite ? "disabled" : "able",
                handleButtonClick,
                error
            };
            const inputs = [
                {
                    name: "name", validate: () => {
                    }
                },
                {
                    name: "email", validate: () => {
                    }
                },
                {
                    name: "email_confirm", validate: () => {
                    }
                },
            ];
            const content_text = "You will be the first...";
            return {
                title: inviteSuccess ? "All Done" : "Request on invite",
                content:inviteSuccess? {content_text} : {inputs},
                button: inviteSuccess ? button_ok : button_send
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
