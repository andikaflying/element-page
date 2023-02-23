import React from "react";
import styled from "styled-components";

const Button = () => {
  const Tombol = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: 200px;
  `;

  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Tombol)`
    color: tomato;
    border-color: tomato;
  `;

  const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <ButtonBox>
      <Tombol>Normal Button</Tombol>
      <TomatoButton>Tomato Button</TomatoButton>
    </ButtonBox>
  );
};

export default Button;
