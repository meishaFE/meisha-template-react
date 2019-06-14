import React from 'react';

class Layout extends React.Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default Layout;
