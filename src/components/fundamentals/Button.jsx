import React from 'react'
import styled from 'styled-components';

function Button() {
    return (
        <div>
            <StyledButton>Button1</StyledButton>
            <br />
            <StyledButton variant="outlined">Button2</StyledButton>
        </div>
    )
}

export default Button

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'outlined' ? '#FFF' : '#4caf50'};
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 1rem;
  margin: 1rem;
  font-size: 3rem;
`