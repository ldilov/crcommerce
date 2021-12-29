import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { signOut } from '../../redux/user/user.actions';

const SignOut = ({ signOut }) => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate('/');
  }, [navigate]);

  return <span>Loading...</span>;
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(SignOut);
