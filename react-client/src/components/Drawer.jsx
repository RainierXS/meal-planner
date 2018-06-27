import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const flipIn = keyframes`
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
`;
const flipOut = keyframes`
  0% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
  100% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
`;

// const Container = styled.div`
//   height:100%;
//   position: fixed;
//   top: 0;
  
//   @media (max-width: 959px) {
//     width:100%
//     pointer-events: ${props => props.open ? 'all' : 'none'};
//   }
// `;

// const Drawer = styled.div`
//   background: darkviolet;
//   overflow: hidden;
//   border-right: 2px solid limegreen;
//   position: relative;
//   height: 100%;
//   width: ${props => props.width || '16%'};
//   min-width: ${props => props.minWidth || props.width || '200px'};
//   top: 55px;
//   @media (max-width: 959px) {
//     opacity: 0;
//     animation: ${props => props.open ? flipIn : flipOut} ${props => props.loaded ? '1s' : '0s'} cubic-bezier(0.175, 0.885, 0.320, 1.275) both
//   }
// `;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   position: inherit;
//   background: darkblue;
//   transition: all .5s ease-out;
//   opacity: 0;
//   pointer-events: none;
//   @media (max-width: 959px) {
//     opacity: ${props => props.open ? '.2' : '0'};
//     pointer-events: ${props => props.open ? 'all' : 'none'};
//   }
// `;

const Container = styled.div``;

const Drawer = styled.div``;

const Overlay = styled.div``;

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
      <Container open={open}>
        <Overlay open={open} className="overlay" onClick={onClick}/>
        <Drawer open={open} loaded={loaded} width={width} minWidth={minWidth}>
          { children }
        </Drawer>
      </Container>
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
