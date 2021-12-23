import { Component } from 'react';

// Components
import CustomButton from '../custom-button/custom-button.component';

// Services
import UserService from '../../data/services/user.service';
import AuthService from '../../data/services/auth.service';
import {
  FormInputContainer,
  SignupContainer,
  SignupFormContainer,
  TitleText
} from './sign-up.styles';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const { user } = await AuthService.signUpWithCredentials(email, password);

    await UserService.saveAuthUser(user, { displayName });

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignupContainer>
        <TitleText>I do not have an account</TitleText>
        <span>Sign up with your email and password</span>

        <SignupFormContainer onSubmit={this.handleSubmit}>
          <FormInputContainer
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />

          <FormInputContainer
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />

          <FormInputContainer
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInputContainer
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </SignupFormContainer>
      </SignupContainer>
    );
  }
}

export default SignUp;
