import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.div`
  max-width: 100%;
  max-width: 90vw;
  height: 5em;
  text-align: center;
  align-items: stretch;
  flex-flow: row nowrap;
  display: flex;
  flex-basis: 100%;
  @media (min-width: 1200px) {
    max-width: 1080px;
  }

  >* {
    flex-grow: 1;
    align-self: center;
  }
`;

const ContentLabel = (props) => {
  return (
    <Label>{props.children}</Label>
  );
};

ContentLabel.propTypes = {

};

export default ContentLabel;
