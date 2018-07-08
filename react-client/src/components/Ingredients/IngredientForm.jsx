import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SelectDropdown from '../SelectDropdown';

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 100%;
`;
const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 0;
  height: 2.5em;
  width: 100%;
  padding: 0 .5em;
  transition: background .25s ease-in;
  &:hover, &:focus {
    outline: 0;
    background: ${({ theme }) => theme.primary};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.accent};
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  @media (min-width: 50em) {
    height: 100%;
  }
`;
const Col = styled.div`
  flex-basis: 100%;
  @media (min-width: 50em){
    flex-basis: ${({ flexwidth }) => (flexwidth || 'inherit')}
  }
`;
const Button = styled.button`
  flex-basis: 100%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: 0;
  transition: height .25s ease-out;
  overflow: hidden;
  ${({ show }) => (show ? `
    height: 2.5em;
    pointer-events: inherit;
  ` : `
    height: 2px;
    pointer-events: none;
    &:focus {
      outline: none;
    }
  `)};

  >i {
    padding: 0.1em;
    margin: 0;
    font-size: 2em;
    vertical-align: bottom;
  }

`;

const IngredientForm = (props) => {
  const {
    onChange, onSubmit, fields, showButton
  } = props;
  return (
    <Form noValidate autoComplete="off" onSubmit={onSubmit}>
      {
        fields.map((f) => {
          switch (f.type) {
            case 'select':
              return <Col flexwidth={f.width} key={f.id}><SelectDropdown options={f.options} placeholder={f.placeholder} title={f.title} onChange={onChange(f.id)} value={f.value} onSubmit={onSubmit} /></Col>;
            default:
              return <Col flexwidth={f.width} key={f.id}><Input value={f.value} placeholder={f.placeholder} type={f.type} onChange={onChange(f.id)} /></Col>;
          }
        })
      }
      <Button type="submit" onClick={onSubmit} show={showButton}><i className="material-icons">add</i></Button>
    </Form>
  );
};

IngredientForm.propTypes = {

};

export default IngredientForm;
