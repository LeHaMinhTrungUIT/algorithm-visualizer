import React from "react";
import styled from "styled-components";

const InfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function InfoFooter({ swapCount, comparisionCount, children }) {
  return (
    <InfoFlex>
      <div>Number of swap: <strong>{swapCount}</strong></div>
      <div>Number of comparision: <strong>{comparisionCount}</strong></div>
    </InfoFlex>
  );
}
