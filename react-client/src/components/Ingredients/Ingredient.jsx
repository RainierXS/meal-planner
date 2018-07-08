import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { changeStringCase } from '../../helpers/stringHelpers';

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${({ theme }) => theme.accent};
  padding: .5em;
  margin: .25em 0 .25em 0;
  border-radius: .5em;
  position: relative;
  flex-grow: 1;
  @media (min-width:40em) {
    flex-basis: 49%;
    margin: .25em .5%;
  }
  @media (min-width:50em) {
    flex-basis: 100%;
    padding: .25em 0;
    flex-flow: row nowrap;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.accent};
    border-radius: 0;
  }
`;

const Col = styled.div`
  flex-basis: 100%;
  padding: 0 .5em;
  @media (min-width:50em) {
    flex-basis: ${({ flexwidth }) => (flexwidth || 'inherit')};
    >span {display: none;}
  }
`;

const Button = styled.button`
  border: 0;
  background: none;
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1.5em;
  padding: 0;
  margin: 0;
  padding-top: 3px;
  height: 1.5em;
  @media (min-width:50em) {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
  >i {
    font-size: 1.25em;
    color: ${({ theme }) => theme.warning};
  }
`;

const Ingredient = ({ name, type, unit, onClickRemove }) => (
  <Row>
    <Col flexwidth="50%">
      <Button onClick={onClickRemove}><i className="material-icons">close</i></Button>
      <span>Name:</span> {changeStringCase(name)}
    </Col>
    <Col flexwidth="25%"><span>Type:</span> {changeStringCase(type)}</Col>
    <Col flexwidth="25%"><span>Unit:</span> {changeStringCase(unit)}</Col>
  </Row>
);

Ingredient.propTypes = {

};

export default Ingredient;
