import React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <Container>{message}</Container>;
}

const Container = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.error};
`;

export default ErrorMessage;
