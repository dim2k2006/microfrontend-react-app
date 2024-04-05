import React, { useState } from 'react';
import { Field, FieldProps as FormikFieldProps } from 'formik';

export interface FieldProps extends FormikFieldProps {
  name: string;
  value: string | number;
  placeholder: string;
  error: boolean;
  errorMsg?: string;
  isValid: boolean;
  onFocus: (props: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (props: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  isFocused: boolean;
}

type ErrorFnProps = {
  submitFailed: boolean;
  isActive: boolean;
  isTouched: boolean;
  isError: boolean;
  value: string;
  initialValue: string;
};

function errorFn({
  submitFailed,
  isActive,
  isTouched,
  isError,
  value,
  initialValue,
}: ErrorFnProps): boolean {
  if (isActive) return false;

  if (isError && submitFailed) return true;

  return isTouched && isError && value !== initialValue;
}

type ErrorMsgFnProps = {
  submitFailed: boolean;
  isActive: boolean;
  isError: boolean;
  errorMessage?: string;
};

function errorMsgFn({
  submitFailed,
  isActive,
  isError,
  errorMessage,
}: ErrorMsgFnProps): string | undefined {
  if (isActive) return '';

  if (isError && submitFailed) return errorMessage;

  return !isActive ? errorMessage : '';
}

type ValidFnProps = {
  isActive: boolean;
  isTouched: boolean;
  isError: boolean;
};

const validFn = ({ isActive, isTouched, isError }: ValidFnProps): boolean =>
  !isActive && isTouched && !isError;

type ComposedFieldProps = {
  placeholder?: string;
  children: (props: FieldProps) => void;
  name: string;
  type?: string;
  validate?: (value: string) => string | void;
};

const defaultValidate = () => undefined;

function ComposedField({
  children,
  name,
  type,
  validate = defaultValidate,
  placeholder = '',
  ...props
}: ComposedFieldProps) {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  return (
    <Field name={name} validate={validate}>
      {({ field, form, meta }: FormikFieldProps) =>
        children({
          field,
          form,
          meta,
          ...props,
          name: field.name,
          value: field.value,
          type,
          placeholder,
          isFocused: focused,
          onChange: field.onChange,
          onFocus,
          onBlur: (event: unknown) => {
            field.onBlur(event);

            onBlur();
          },
          error: errorFn({
            submitFailed: !form.isValid && form.submitCount > 0,
            isActive: focused,
            isTouched: meta.touched,
            isError: !!meta.error,
            value: field.value,
            initialValue: form.initialValues[name],
          }),
          errorMsg: errorMsgFn({
            submitFailed: form.isValid && form.submitCount > 0,
            isActive: focused,
            isError: !!meta.error,
            errorMessage: form.errors[name] as string | undefined,
          }),
          isValid: validFn({
            isActive: focused,
            isTouched: meta.touched,
            isError: !!meta.error,
          }),
        })
      }
    </Field>
  );
}

export default ComposedField;
