import React from "react";
import styled from "styled-components";
import LinkedList from "./LinkedList";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
      <LinkedList/>
    </FooterDiv>
  );
}
