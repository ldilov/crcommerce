import './directory.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';
import withRouter from '../hocs/withRouter';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map((item) => (
        <MenuItem {...item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps, null)(Directory));
