import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import withRouter from '../../components/hocs/withRouter';

const HomePage = () => {
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
};

export default withRouter(HomePage);
