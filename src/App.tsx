import React, { useState, useEffect } from 'react';

import Main from './components/Main/index';
import About from './components/About/index';
import Project from './components/Projects/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import ChatIcon from './components/Chat/ChatIcon'; 
import Chat from './components/Chat/Chat';
import GlobalStyles from './styles/global';

type Message = {
  text: string;
  type: "bot" | "user" | "callToAction";
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  useEffect(() => {
    // wait 1 second and then show the welcome message
    setTimeout(() => {
        setMessages([
            ...messages,
            {
                text: '¡Hola! Soy Robi un asistente de IA, aquí para compartir todo sobre las increíbles habilidades y experiencia de desarrollador de Marcos',
                type: 'bot'
            },
            {
                text: '¿Qué te gustaría saber?',
                type: 'bot'
            },
            {text: '¿Qué tecnologías usa Marcos?', type: 'callToAction'},
            {text: '¿Qué proyectos ha realizado Marcos?', type: 'callToAction'},
            {text: '¿Cómo describirías a Marcos trabajando en equipo?', type: 'callToAction'},
            {text: '¿En que redes puedo conectar con Marcos?', type: 'callToAction'},
        ]);
    }, 1000)},
    []);
  return (
    <>
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      <GlobalStyles />
      <ChatIcon onClick={isChatOpen ? handleCloseChat : handleOpenChat} isChatOpen={isChatOpen} />
      {isChatOpen && <Chat onClick={handleCloseChat} messages={messages} setMessages={setMessages}/>}
    </>
  );
}

export default App;
