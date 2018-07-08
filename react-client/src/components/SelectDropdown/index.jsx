import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  outline: 0;
  min-width: 10em;
  &:focus>.placeholder {
    outline: 0;
    border: 2px solid ${({ theme }) => theme.accent};
  }
  &:focus>.optioncontainer {
    outline: 0;
    border: 2px solid ${({ theme }) => theme.accent};
    border-top:0;
  }
`;

const Option = styled.div`
  padding: .5em;
  width: 100%;
  height: 2.5em;
  &.active {
    background: ${({ theme }) => theme.tertiary};
  }
  &:hover, &:focus {
    background: ${({ theme }) => theme.tertiary};
  }
`;

const OptionContainer = styled.div`
  background: white;
  color: black;
  white-space: nowrap;
  border-radius: 0 0 .5em .5em;
  overflow: hidden;
  position: absolute;
  min-width: 100%;
  opacity:0;
  transition: all .25s ease-out;
  z-index: 999;
  ${({ show }) => (show ? (`
    opacity: 1;
    `
  ) : '')}
  div.option {
    height:0;
    opacity:0;
    transition: inherit;
    padding: 0;
    ${({ show }) => (show ? (`
      height: 2.5em;
      opacity: 1;
      padding: .5em;
      `) : '')}
  }
`;

const Placeholder = styled(Option)`
  background: ${({ show, theme }) => (show ? theme.primary : 'transparent')};
  color: ${({ theme, value }) => (value ? theme.text : theme.placeholder)};
  z-index: 0;
  width: 90%;
  transition: background .25s ease-in;
  &+button{
    transition: background .25s ease-in;
  }
  &:hover, &:focus, &:hover+button, &:focus+button  {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
  &:focus, &:focus+button {
    outline: 0;
    border: 2px solid ${({ theme }) => theme.accent};
  }
  &:focus {
    border-right: 0;
  }
  &:focus+button {
    border-left: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: none;
  ${({ show }) => (show ? (`
    pointer-events: all;
    display: inherit;
    z-index:3;
  `
) : '')}
`;

const Button = styled.button`
  border: 0;
  background: none;
  color: ${({ theme }) => theme.primary};
  position: absolute;
  right: 0;
  top: 0;
  width: 1.5em;
  padding: 0;
  margin: 0;
  padding-top: 3px;
  width: 10%;
  height: 100%;

  >i {
    font-size: 1.25em;
  }
`;

export default class SelectDropdown extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    render: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    placeholder: 'Select an Option',
    render: (o, value, onChange) => <Option key={o} className={`option${o === value ? ' active' : ''}`} value={o} onClick={() => onChange({ target: { value: o } })}>{o}</Option>,
    options: ['daily', 'weekly', 'biweekly'],
    onChange: selected => console.log(`${selected} selected`),
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showOptions: false,
      options: [],
    };
  }

  componentDidMount = () => {
    const { options: o } = this.props;
    const options = o.filter((value, idx, self) => self.indexOf(value) === idx);
    this.setState({ options });
  }


  componentWillReceiveProps = (nextProps) => {
    const { value } = nextProps;
    if (value != this.state.value) {
      this.setState({ value });
    }
  }

  onChange = (value) => {
    const { onChange } = this.props;
    this.setState({ value, showOptions: false }, () => onChange({ target: { value } }));
  }

  onShowOptions = () => {
    this.setState({ showOptions: true });
  }

  onHideOptions = () => {
    this.setState({ showOptions: false });
  }

  onKeyDown = (e) => {
    const { options, value: val, showOptions } = this.state;
    const { onSubmit } = this.props;
    let value = '';
    let index = 0;
    switch (e.keyCode) {
      case 38:
        if (!showOptions) this.setState({ showOptions: true });
        index = options.indexOf(val) - 1;
        if (index < 0) index = options.length - 1;
        break;
      case 40:
        if (!showOptions) this.setState({ showOptions: true });
        index = options.indexOf(val) + 1;
        if (index > options.length - 1) index = 0;
        break;
      case 13:
        if (!this.state.showOptions) {
          onSubmit();
          return;
        }
        this.onChange(val);
        this.setState({ showOptions: false });
        return;
      case 9:
        this.onChange(val);
        this.setState({ showOptions: false });
        return;
      default:
        return;
    }
    value = options[index] || '';
    this.setState({ value });
  }

  render() {
    const { placeholder, render } = this.props;
    const { options, showOptions, value } = this.state;
    return (
      <Container>
        <Placeholder
          tabIndex="0"
          contenteditable
          value={value}
          onFocus={this.onShowOptions}
          onClick={this.onShowOptions}
          onKeyDown={this.onKeyDown}
          className="placeholder"
          show={showOptions}
        >
          {showOptions ? placeholder : (value || placeholder)}
        </Placeholder>
        <Button onClick={() => this.onChange('')}><i className="material-icons">refresh</i></Button>
        <OptionContainer show={showOptions} className="optioncontainer">
          {options.map(o => render(o, value, () => this.onChange(o)))}
        </OptionContainer>
        <Overlay show={showOptions} onClick={this.onHideOptions} />
      </Container>
    );
  }
}
