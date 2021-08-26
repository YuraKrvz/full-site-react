import React from 'react';
import { Container, FormInput, FormLabel, FormWrap, Icon, FormContent, Form, FormH1, Text, FormButton} from './SigninElements';


const SignIn = ()=> {
 
  return (
    <Container>
      <FormWrap>
         <Icon to="/">dolla</Icon>
         <FormContent>
            <Form action="#">
               <FormH1>Sign in to your account</FormH1>
               <FormLabel htmlFor="for">email</FormLabel>
               <FormInput type="email" required />
               <FormLabel htmlFor="for">passsword</FormLabel>
               <FormInput type="passsword" required />
               <FormButton type="submit">Continue</FormButton>
               <Text>Forgot password</Text>
            </Form>
         </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;