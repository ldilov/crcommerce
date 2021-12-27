/* eslint-disable react/display-name */
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { forwardRef } from 'react';

function withRouter(Child) {
  return forwardRef((props, ref) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Child {...props} navigate={navigate} location={location} params={params} ref={ref} />;
  });
}

export default withRouter;
