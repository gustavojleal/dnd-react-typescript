import styled from 'styled-components';

export const StyledColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10vh auto;
    width: 80%;
    height: 80vh;
    gap: 8px;
`;

export const StyledColumn = styled.div`
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    margin-top: 8;

  h2: {
    margin: 0;
    padding: 0 16px;
  }
`;

export const StyledList = styled.div`
  background-color: #ddd;
  border: 8;
  padding: 16;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 8;
`;

export const StyledItem = styled.div`
  background-color: #eee;
  border-radius: 4;
  padding: 4px 8px;
  transition: background-color .8s ease-out;
  margin-top: 8;

  hover {
    background-color: #fff';
    /* transition: background-color .1s ease-in; */
  
`;


  