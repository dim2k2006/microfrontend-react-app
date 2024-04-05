import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

type InputProps = {
  type?: string;
  id: string;
  name: string;
  label: string;
  value: string | number;
  autoFocus?: boolean;
  isFocused?: boolean;
  onBlur: (props: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (props: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (props: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (props: React.KeyboardEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
};

function Input({
  type = 'text',
  id,
  name,
  label,
  value,
  autoFocus = false,
  isFocused = false,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
  isError = false,
  errorMessage,
}: InputProps) {
  const isFilled = typeof value === 'string' ? value.length > 0 : true;

  return (
    <Container>
      <Label htmlFor={id}>
        <InputField
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoFocus={autoFocus}
          $isError={isError}
        />

        <LabelText $isFocused={isFocused} $isFilled={isFilled}>
          {label}
        </LabelText>
      </Label>

      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: block;
  text-align: left;
`;

const Label = styled.label``;

const InputField = styled.input<{ $isError: boolean }>`
  margin: 0;
  padding: 20px 60px 0 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  display: block;
  width: 100%;
  height: 62px;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  color: ${({ theme }) => theme.colors.main};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.iron};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  transition: ${({ theme }) => `border-color ${theme.transition}`};

  &:focus {
    border-color: ${({ theme }) => rgba(theme.colors.shuttleGray, 0.43)};
  }

  ${({ $isError, theme }) =>
    $isError &&
    `
    border-color: ${rgba(theme.colors.error, 0.2)};
    background-color: ${theme.colors.roseWhite};
  `};
`;

const LabelText = styled.span<{ $isFocused: boolean; $isFilled: boolean }>`
  position: absolute;
  display: block;
  width: 100%;
  top: 50%;
  left: 0;
  padding: 0 20px 0 20px;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shuttleGray};
  line-height: 1;
  transform: translateY(-50%);
  pointer-events: none;
  will-change: font-size, margin-top;
  transition: font-size 0.2s ease, margin-top 0.2s ease;

  ${({ $isFocused, $isFilled }) =>
    ($isFocused || $isFilled) &&
    `
      margin-top: -14px;
      font-size: 13px;
  `};
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -15px;
  font-weight: normal;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.error};
`;

export default Input;
