import React from 'react';
import styled from "styled-components";

const StyledInfo = styled.p `
  color: white;
  padding: 5%;
  margin: 0% 12%
`

const Info = props => {
  console.log(props, "info props")
  return (
      <div>
      <StyledInfo className="info">{props.info}</StyledInfo>
      </div>
  );
};


export default Info;