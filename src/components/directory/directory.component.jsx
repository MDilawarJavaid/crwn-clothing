import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-items/menu-items.component';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({ id, linkUrl, ...otherSertionProps }) => (
        <MenuItem key={id} linkUrl={linkUrl} {...otherSertionProps} />
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);