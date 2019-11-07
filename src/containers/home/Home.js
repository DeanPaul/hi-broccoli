import React from "react";
import HomeController from './HomeController';
import {InviteHeader, InviteContent, InviteFooter, InviteModalContent, BusyIndicator, Modal} from '../../components'

const Home = (props) => (
    <HomeController {...props}>
        <InviteHeader/>
        <InviteContent/>
        <InviteFooter/>
        <Modal>
            <InviteModalContent/>
        </Modal>
    </HomeController>

);

export default Home;
