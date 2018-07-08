import styled from 'styled-components';
import LinkButton from './LinkButton';
import { fadeInBottom } from './Animations';

// fluid text formula #em / (#vw / 100) for min-width

// #region buttons
// const iconButtonStyle = `
//   border: 0;
//   background: none;
//   color: white;
//   height: 64px;
//   padding: 1em;
//   width: 100%;

//   >i {
//     font-size: 2rem;
//     margin: 0;
//     padding: 0;
//     vertical-align: middle;
//   }
// `;
const iconButtonStyle = `
  border: 0;
  background: none;
  height: 64px;
  padding: 1em;
  width: 100%;
  width:64px;
  transition: inherit;

  &:focus, &:hover {
    outline: none;
    >i {
      &::after {
        opacity: 1;
        border-radius: 36px;
      }
    }
  }

  &.active{
    >i::after {
      opacity: 1;
      border-radius: 6px;
      box-shadow: rgba(254,254,254,1) 0 0 2px 0px
    }
  }
  >i {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    &::after {
      content: '';
      margin-top: -.25em;
      position: absolute;
      width: 1.5em;
      height: 1.5em;
      right: .25em;
      opacity: 0;
      transition: all .5s ease-in-out;
    }
  }

  @media (max-width: 50em) {
    >i {
      &::after {
        opacity: .25;
      }
    }
  }
`;

export const IconButton = styled.button`
  ${iconButtonStyle}
`;
export const RoutingIconButton = styled(LinkButton)`
  ${iconButtonStyle}
`;
// #endregion buttons

export const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  animation: ${fadeInBottom} .5s ease-in-out;
`;

export const FlexRow = styled.div`
  flex-basis: 100%;
`;
