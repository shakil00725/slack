import React from 'react';
import { Wrapper, Main } from './HomeStyled';
import SideBar from '../SideBar/Sidebar';
import MessageContainer from '../../Containers/Message';
import DetailsContainer from '../../Containers/DetailsPanel';
import { connect } from "react-redux";

const Home = ({user,channel}) => (
<Wrapper>
    <Main>
        <SideBar userID={user && user.uid} user={user}/>
        <MessageContainer key={channel && channel.id} user={user} channel={channel} />
        <DetailsContainer channel={channel} />
    </Main>
</Wrapper>
);

const mapStatetoProps = state => ({
    user: state.user.currentUser,
    channel:state.channel.currentChannel
});

export default connect(mapStatetoProps)(Home);