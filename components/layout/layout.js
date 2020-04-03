import React, { Fragment } from 'react';
import { initGA, logPageView } from '../../utils/analytics';

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render () {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}