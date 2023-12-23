import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const colors = {
  primary: '#2c3e50', // dark blue
  secondary: '#ecf0f1', // light gray
  tertiary: '#34495e', // dark gray
  quaternary: '#ffffff', // white
  accent1: '#e74c3c', // red
  accent2: '#27ae60', // green
};

export const Container = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  position: fixed;
  bottom: 120px;
  right: 40px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  background-color: ${colors.secondary};
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${colors.primary};
    color: ${colors.quaternary};
    font-size: 18px;
    font-weight: 600;
  }

  .close {
    cursor: pointer;
  }

  .title {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 10px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0px -1px 5px 0px ${colors.primary};
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid ${colors.primary};
    border-radius: 8px;
    background-color: ${colors.primary};
    color: ${colors.quaternary};
    font-size: 16px;
    font-weight: 600;
    outline: none;
  }

  .footer button {
    width: 100px;
    height: 40px;
    border: 1px solid ${colors.secondary};
    border-radius: 8px;
    background-color: ${colors.tertiary};
    color: ${colors.secondary};
    font-size: 16px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
  }

  .footer button:hover {
    background-color: ${colors.secondary};
    color: ${colors.tertiary};
  }

  .bot-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 50%;
    background-color: ${colors.primary};
    color: ${colors.quaternary};
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bot-message {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0;
    border-radius: 8px;
    color: ${colors.quaternary};
    padding: 5px; /* Updated: Decreased padding */
  }

  .bot-message .text {
    margin-left: 10px;
    font-size: 14px; /* Updated: Decreased font size */
    font-weight: 600;
    border-radius: 0px 8px 8px 8px;
    background-color: ${colors.quaternary};
    color: ${colors.primary};
    padding: 5px; /* Updated: Decreased padding */
  }

  .user-message {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 10px 0;
    border-radius: 8px 0px 8px 8px;
    background-color: ${colors.tertiary};
    color: ${colors.secondary};
    padding: 5px; /* Updated: Decreased padding */
  }
};`
