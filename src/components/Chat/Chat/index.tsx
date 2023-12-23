// src/components/Chat/index.tsx
import React, { useEffect } from 'react';
import { Container } from './styles';
import robi from '../../../assets/robi.png';
import {  Loader } from '../Loader/styles'

interface ChatProps {
    onClick: () => void;
}
const Chat: React.FC<ChatProps> = ({onClick}) => {
    const [messages, setMessages] = React.useState<{ text: string; type: string; }[]>([]);
    const [callToAction, setCallToAction] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        // wait 1 second and then show the welcome message
        setTimeout(() => {
            setMessages([
                ...messages,
                {
                    text: 'Hola, ¿En que puedo ayudarte?',
                    type: 'bot'
                }
            ]);
            setLoading(false);
        }, 1000)},
        []);


    const onSend = () => {
        if (message.trim() === '') return;
        const messageSent = message
        setMessage(''); // clear the input
        setMessages([
            ...messages,
            {
                text: messageSent,
                type: 'user'
            }
        ]);
        
        setLoading(true);
        fetch(process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api/v1/messages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: messageSent
            })
        })
        .then(response => {
             if(response.status === 429) {
                throw new Error('Too many Requests');
             }
            return response.json();
        })
        .then(data => {
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    text: data.response,
                    type: 'bot'
                }
            ]);
            
            setLoading(false);
        })
        .catch(err => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        text: 'Ups algo ha salido mal con mis circuitos, podrías comunicarte con el en sus redes.',
                        type: 'bot'
                    }
                ]);
                setCallToAction(true);
            
           
            setLoading(false);
        });
    };

    return (
        <Container>
        <div className="header">
            <div className="icon">Robi</div>
            <div className="title">Asistente Virtual</div>
            <div className="close" onClick={onClick}>X</div>
        </div>
        <div className="content">
            {messages.map((message, index) => (
                <div className={`${message.type}-message`} key={index}>
                    {message.type === 'bot' && <div className='bot-icon'><img src={robi} alt="Robot-Icon" /></div>}
                    <div className="text">{message.text}</div>
                   
                   </div>
                   ))} 
              {callToAction && <a href='#redes' > Redes Sociales</a>}
              {loading && <Loader/>}      
        </div>
        <div className="footer">
            <input type="text" placeholder="Escribe su pregunta" value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button onClick={onSend}>Enviar</button>
        </div>
        </Container>
    );
};

export default Chat;