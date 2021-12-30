import { lazy, Suspense } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import withRouter from '../hocs/withRouter';

import { DirectoryMenu } from './directory.styles';

const MenuItem = lazy(() => import('../../components/menu-item/menu-item.component'));

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map((item) => (
        <Suspense fallback={<div>Loading</div>} key={item.id}>
          <MenuItem {...item} />
        </Suspense>
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps, null)(Directory));
