import React from 'react';
import styled from 'styled-components';
import Spinner from './spinner';

type ButtonProps = {
  type: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
};

function Button({ type, onClick, children, isLoading = false }: ButtonProps) {
  return (
    <ButtonElement type={type} onClick={onClick} disabled={isLoading}>
      <Content $isLoading={isLoading}>{children}</Content>

      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </ButtonElement>
  );
}

const ButtonElement = styled.button`
  position: relative;
  display: flex;
  width: 240px;
  height: 46px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  appearance: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.promo};
  transition: background-color ${({ theme }) => theme.transition};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Content = styled.div<{ $isLoading: boolean }>`
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transition};
`;

const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
`;

export default Button;
