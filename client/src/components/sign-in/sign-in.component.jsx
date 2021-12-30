import { Component } from 'react';

// Components
import CustomButton from '../custom-button/custom-button.component';

// Icons
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';

// Services
import { ButtonsContainer, FormInputContainer, SignInContainer, TitleText } from './sign-in.styles';
import { connect } from 'react-redux';
import { credsSignInStart, googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { signInWithCredentials } = this.props;
    const { email, password } = this.state;

    signInWithCredentials(email, password);

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleGoogleSignIn = () => {
    const { signInWithGoogle } = this.props;
    signInWithGoogle();
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
            <CustomButton type='button' onClick={this.handleGoogleSignIn} isGoogleSignIn={true}>
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

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithCredentials: (email, password) => dispatch(credsSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
