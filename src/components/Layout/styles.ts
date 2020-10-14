import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const LeftSide = styled.div`
  width: 15%;
  height: calc(100vh - 36px);
  float: left;
  background-color: #404040;

  @media (max-width: 768px){
    display: none;
  }
`;

export const RightSide = styled.div`
  width: 85%;
  height: calc(100vh - 36px);
  background: blue;
  float: right;

  @media (max-width: 768px){
    width: 100%;
  }
`;