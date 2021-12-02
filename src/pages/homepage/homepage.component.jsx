import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import withRouter from '../../components/hocs/withRouter';

const HomePage = (props) => {
	console.log(props);
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
};

export default withRouter(HomePage);
