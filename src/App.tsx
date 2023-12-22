import React from 'react';

import Main from './components/Main/index';
import About from './components/About/index';
import Project from './components/Projects/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import ChatIcon from './components/Chat/ChatIcon'; 
import Chat from './components/Chat/Chat';
import GlobalStyles from './styles/global';

import { useState } from 'react';
const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
 return (
  <>
    <Main />
    <About />
    <Project />
    <Contact />
    <Footer />
    <GlobalStyles />
    <ChatIcon onClick={isChatOpen ? handleCloseChat : handleOpenChat} isChatOpen={isChatOpen} />
      {isChatOpen && <Chat onClick={handleCloseChat}/>}
  </>
);}

export default App;
