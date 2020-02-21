import React from 'react';
import styled from "styled-components";


const StyledTitle = styled.h1`
  color: white;
  text-decoration: underline;
  width: 50%;
  `;

const Title = props => {
  console.log(props, " title props")
  return (
    <div className="Title-container">
      <StyledTitle className="title">{props.title}</StyledTitle>
    </div>
  );
};


export default Title;