import styled, { keyframes } from 'styled-components';


const colors = {
  first: '#ff7961',
  second: '#ba68c8',
  third: '#7986cb',
  fourth: '#64b5f6',
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.fourth};

  .bot-btn {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: ${colors.third}};
    &:hover {
      background-color: ${colors.third};
    }
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  .close-btn {
    animation: ${rotate} 0.5s ease-in-out;
    font-size: 30px;
    color: white;
  }
`;
