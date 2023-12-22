
import React from 'react';
import { Container } from './styles';
import robi from '../../../assets/robi.png';
interface ChatIconProps {
    onClick: () => void;
    isChatOpen: boolean;    
}

const ChatIcon: React.FC<ChatIconProps> = ({ onClick, isChatOpen }) => {
    return (
        <Container>
            <button className="bot-btn" onClick={onClick}>
               { isChatOpen ? <p className='close-btn'>X</p> : (<div className="icon"><img src={robi} alt="RobotIcon" /></div>)}
            </button>
        </Container>
    );
};

export default ChatIcon;