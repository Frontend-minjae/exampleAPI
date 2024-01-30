import React from 'react'
import styled,{ css } from 'styled-components'

export default function ApiWrapper() {
  return (
    <StyledApiWrapper>
      <h1>ApiWrapper</h1>
      <p>
        This is an example of a component that uses the API.
      </p>
    </StyledApiWrapper>
  )
}

const StyledApiWrapper = styled.div`
  h1 {
    background-color: red;  
  }
  `;
