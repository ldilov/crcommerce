import { lazy, Suspense } from 'react';

import './directory.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import withRouter from '../hocs/withRouter';

const MenuItem = lazy(() => import('../../components/menu-item/menu-item.component'));

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map((item) => (
        <Suspense fallback={<div>Loading</div>} key={item.id}>
          <MenuItem {...item} />
        </Suspense>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps, null)(Directory));
