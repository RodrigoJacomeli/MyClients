import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const LeftSide = styled.div`
  width: 15%;
  max-width: 320px;
  height: calc(100vh - 70px);
  float: left;
`;

export const RightSide = styled.div`
  width: 85%;
  height: calc(100vh - 70px);
  background: blue;
  float: right;
`;