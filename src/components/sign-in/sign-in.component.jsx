import { Component } from 'react';

// Components
import CustomButton from '../custom-button/custom-button.component';

// Icons
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';

// Services
import AuthService from '../../data/services/auth.service';

import { ButtonsContainer, FormInputContainer, SignInContainer, TitleText } from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.notificationHandler = props.notify;

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await AuthService.signIn(AuthService.providers.STANDARD, {
        email,
        password
      });
      this.notificationHandler(`Successfully logged in!`, 'success');
    } catch (error) {
      this.notificationHandler(`Failed to sign in!`, 'error');
    }

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {
    AuthService.signIn(AuthService.providers.GOOGLE);
  };

  render() {
    return (
      <SignInContainer>
        <TitleText>I already have an account</TitleText>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputContainer
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInputContainer
            name='password'
            type='password'
            label='Password'
            autoComplete='current-password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'>Submit Form</CustomButton>
            <CustomButton onClick={this.handleGoogleSignIn} isGoogleSignIn={true}>
              <IconContext.Provider
                value={{
                  style: {
                    verticalAlign: 'middle',
                    marginRight: 5,
                    transform: 'scale3d(1.5, 1.5, 1.5)'
                  }
                }}
              >
                <FcGoogle />
                <span className='text-content'>Sign in with Google</span>
              </IconContext.Provider>
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
