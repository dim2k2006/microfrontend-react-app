import React from 'react';
import styled, { keyframes } from 'styled-components';

function Spinner() {
  return (
    <Container>
      <svg viewBox="0 0 36 36">
        <path
          strokeDasharray="78, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </Container>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    path {
      stroke: currentColor;
      fill: none;
      stroke-width: 2.2;
      stroke-linecap: round;
    }
  }
`;

export default Spinner;
