import React, { useContext } from "react";
import { BoxContainer } from "./CommonComponents";
import { Marginer } from "../marginer/index";
import {
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./CommonComponents";
import TokenService from '../services/Token-Service'
import { AccountContext } from "./AccountContext";
import { withRouter } from "react-router-dom";
import config from "../config";


function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    fetch(`${config.SERVER_ENDPOINT}/users`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_name: event.target.user_name.value,
        password: event.target.password.value,
        email: event.target.email.value,
      }),
    })
      .then((res) => {
        return fetch(`${config.SERVER_ENDPOINT}/auth/login`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            user_name: event.target.user_name.value,
            password: event.target.password.value,
          }),
        });
      })

      .then((res) => res.json())
      .then((data) => {
        TokenService.saveAuthToken(data.authToken);
        props.history.push("/main");
      });

    props.history.push("/main");
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Username"
          name="user_name"
          minLength="4"
        />
        <Input type="email" placeholder="Email" name="email" />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          minLength="8"
        />
        <Input type="password" placeholder="Confirm Password" />

        <Marginer direction="vertical" margin={5} />
        {/* <MutedLink href="#">Forgot your password</MutedLink>
        <Marginer direction="vertical" margin="1.6 em" /> */}
        <SubmitButton type="submit">Create Account</SubmitButton>
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Login
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}

export default withRouter(SignupForm);
