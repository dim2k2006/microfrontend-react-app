import React from 'react';
import styled from 'styled-components';
import { Formik, FormikHelpers } from 'formik';
import ComposedField, {
  FieldProps,
} from '@microfrontend-react-app/ui/components/composed-field';
import Input from '@microfrontend-react-app/ui/components/input';
import Heading from '@microfrontend-react-app/ui/components/heading';
import Button from '@microfrontend-react-app/ui/components/button';
import Alert from '@microfrontend-react-app/ui/components/alert';
import { useCreateUser } from '@microfrontend-react-app/users-service-provider';

const required = (value: string | number | boolean) =>
  value || typeof value === 'number' ? undefined : 'Required field';

type FormValues = {
  name: string;
  email: string;
  age: string;
};

const initialFormValues: FormValues = {
  name: '',
  email: '',
  age: '',
};

function UserForm() {
  const userCreatingState = useCreateUser();

  function onSubmit(
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) {
    userCreatingState.mutate(
      {
        name: values.name,
        email: values.email,
        age: Number(values.age),
      },
      {
        onSuccess: () => {
          formikHelpers.resetForm();

          setTimeout(function resetState() {
            userCreatingState.reset();
          }, 4000);
        },
      }
    );
  }

  return (
    <Container>
      <Header>
        <Heading type="h1" title="Create a new user" />
      </Header>

      <Content>
        <Formik
          initialValues={initialFormValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formProps) => {
            return (
              <Form onSubmit={formProps.handleSubmit} noValidate>
                <FormRow>
                  <ComposedField name="name" validate={required}>
                    {(props: FieldProps) => (
                      <Input
                        id={props.field.name}
                        name={props.field.name}
                        label="Name"
                        value={props.field.value}
                        isFocused={props.isFocused}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        isError={props.error}
                        errorMessage={props.errorMsg}
                      />
                    )}
                  </ComposedField>
                </FormRow>

                <FormRow>
                  <ComposedField name="email" validate={required}>
                    {(props: FieldProps) => (
                      <Input
                        id={props.field.name}
                        name={props.field.name}
                        label="Email"
                        value={props.field.value}
                        isFocused={props.isFocused}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        isError={props.error}
                        errorMessage={props.errorMsg}
                      />
                    )}
                  </ComposedField>
                </FormRow>

                <FormRow>
                  <ComposedField name="age" validate={required}>
                    {(props: FieldProps) => (
                      <Input
                        type="number"
                        id={props.field.name}
                        name={props.field.name}
                        label="Age"
                        value={props.field.value}
                        isFocused={props.isFocused}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        isError={props.error}
                        errorMessage={props.errorMsg}
                      />
                    )}
                  </ComposedField>
                </FormRow>

                <FormRow>
                  <Button type="submit" isLoading={userCreatingState.isPending}>
                    Create user
                  </Button>
                </FormRow>
              </Form>
            );
          }}
        </Formik>

        {userCreatingState.isSuccess && (
          <AlertContainer>
            <Alert message="User created 👍" />
          </AlertContainer>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  position: relative;
`;

const Form = styled.form``;

const FormRow = styled.div`
  margin-bottom: 30px;
`;

const AlertContainer = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default UserForm;
