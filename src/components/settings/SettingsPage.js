import React from "react";
import { Container } from "sgds-govtech-react";
import styled from "styled-components";

const MyButton = styled.a`
  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;

  position: static;
  width: 108px;
  height: 40px;

  /* Primary */

  background: #4e73b6;
  border-radius: 15px;

  /* Inside Auto Layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 24px 0px;
`;

function SettingsPage() {
  return (
    <div>
      <Container>
        my container2 <MyButton>a</MyButton>
      </Container>
      ;
    </div>
  );
}

export default SettingsPage;
