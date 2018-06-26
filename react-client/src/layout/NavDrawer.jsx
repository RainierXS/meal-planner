import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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

const Container = styled.div`
  width:100%;
  height:100%;
  position: fixed;
  top: 0;
  @media (max-width: 700px) {
    pointer-events: ${props => props.open ? 'all' : 'none'};
  }
`;

const Drawer = styled.div`
  background: darkviolet;
  overflow: hidden;
  border-right: 2px solid limegreen;
  position: relative;
  height: 100%;
  width: 16%;
  min-width: 200px;
  top: 55px;
  @media (max-width: 700px) {
    opacity: 0;
    animation: ${props => props.open ? flipIn : flipOut} ${props => props.loaded ? '1s' : '0s'} cubic-bezier(0.175, 0.885, 0.320, 1.275) both
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: inherit;
  background: darkblue;
  transition: all .5s ease-out;
  opacity: ${props => props.open ? '.2' : '0'};
`;

class NavDrawer extends PureComponent {
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
    const menuItems = [
      { title: 'Calendar', to: '/calendar' },
      { title: 'Inventory', to: '/inventory' },
      { title: 'Recipes', to: '/recipes' },
      { title: 'Shopping List', to: '/shopping-list' },
    ];
  
    const { show, toggle } = this.props;
    const { loaded } = this.state;
  
    return (
      <Container open={show}>
        <Overlay open={show} className="overlay" onClick={toggle}/>
        <Drawer open={show} loaded={loaded}>
          <ul>
          {menuItems.map(i => (
            <li>
              <Link to={i.to} href={i.to} key={i.to} onClick={toggle}>
                {i.title}
              </Link>
            </li>
          ))}
          </ul>
        </Drawer>
      </Container>
    );
  }
};

export default NavDrawer;
