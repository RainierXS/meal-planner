import styled from 'styled-components';
import LinkButton from './LinkButton';


// fluid text formula #em / (#vw / 100) for min-width

// #region buttons
const iconButtonStyle = `
  border: 0;
  background: none;
  color: white;
  height: 64px;
  padding: 1em;
  width: 100%;
  
  >i {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    vertical-align: middle;
  }
`;

export const IconButton = styled.button`
  ${iconButtonStyle}
`;
export const RouterIconButton = styled(LinkButton)`
  ${iconButtonStyle}
`;
// #endregion buttons

