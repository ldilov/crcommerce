/* eslint-disable react/display-name */
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Child {...props} navigate={navigate} location={location} params={params} />;
  };
}

export default withRouter;
