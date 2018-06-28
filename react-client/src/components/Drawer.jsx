import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DrawerComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  
  componentDidMount = () => {
    setTimeout(() => this.setState({loaded: true}), 1000);
  }
  
  render () {
    const { children, minWidth, open, onClick, width } = this.props;
    const { loaded } = this.state;
  
    return (
      <div open={open}>
        <div open={open} className="overlay" onClick={onClick}/>
        <div open={open} loaded={loaded} width={width} minWidth={minWidth}>
          { children }
        </div>
      </div>
    );
  }
};

DrawerComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

DrawerComponent.defaultProps = {
}

export default DrawerComponent;
