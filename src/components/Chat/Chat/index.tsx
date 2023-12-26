// src/components/Chat/index.tsx
import React, { useEffect,useRef } from 'react';
import { Container } from './styles';
import robi from '../../../assets/robi.png';
import {  Loader } from '../Loader/styles'

interface ChatProps {
    onClick: () => void;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

interface Message {
    text: string;
    type: 'bot' | 'user' | 'callToAction';
}

const Chat: React.FC<ChatProps> = ({onClick, messages, setMessages}) => {
    
    const [contacts, setContacts] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [messageToSend, setMessageToSend] = React.useState<string | null>(null);
    const endOfMessagesRef = useRef<HTMLDivElement>(null)
   
 
    useEffect(() => {
        
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    useEffect(() => {
        if (loading && messageToSend !== null) {
          onSend(messageToSend);
        }
      }, [loading, messageToSend]);

    const handleCallToAction =  (text: string) => {
        setLoading(true);
        setMessageToSend(text);
    }

    const onSend = (text : string) => {
        if (text.trim() === '') return;
        const messageSent = text
        
        
        setMessage(''); // clear the input
        setMessages([
            ...messages,
            {
                text: messageSent,
                type: 'user'
            }
        ]);
        
        
        
        fetch(process.env.REACT_APP_BACKEND_URL || "https://chatbot-portafolio-q6syhv63lq-uc.a.run.app/api/v1/messages", {
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
            setMessageToSend(null);
        })
        .catch(err => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        text: 'Ups algo ha salido mal con mis circuitos, podrías comunicarte con el en sus redes.',
                        type: 'bot'
                    }
                ]);
                setContacts(true);
            
           
                setLoading(false);
                setMessageToSend(null);
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
            {messages.map((message, index) => {
                return (
                    message.type === 'callToAction' ? (
                        <div className='call-to-action' key={index} onClick={() => { handleCallToAction(message.text) }}>{message.text}</div>
                    ) : (
                        <div className={`${message.type}-message`} key={index}>
                            {message.type === 'bot' && <div className='bot-icon'><img src={robi} alt="Robot-Icon" /></div>}
                            <div className="text">{message.text}</div>
                        </div>
                    )
                );
            })}
            {loading && <div style={{height:"2rem"}}>  <Loader />  </div>}
            <div ref={endOfMessagesRef}/>
            {contacts && <a href='#redes'>Redes Sociales</a>}
            
        </div>
        <div className="footer">
            <input type="text" placeholder="Escribe su pregunta" value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button onClick={()=> {
                setLoading(true);
                setMessageToSend(message)}}>Enviar</button>
        </div>
        </Container>
    );
};

export default Chat;