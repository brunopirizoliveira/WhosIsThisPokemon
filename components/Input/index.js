import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const InputBase = styled.input`
  width: 100%;
  padding: 0px;
  margin: 0px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  color: white;  
  font-size: 18px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid;
    padding-left: 3px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 3px;
  }
`;

export default function Input({onChange, placeholder}) {
    return(
        <div>
            <InputBase onChange={onChange} placeholder={placeholder} />
        </div>
    );
}

Input.defaultProps = {
  value: '',
}

Input.PropTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}