import React from "react";
import styled from "styled-components";

const Card = ({ heading, children }) => (
  <Container>
    <Label>{heading}</Label>
    <Bar />
    <Details>{children}</Details>
  </Container>
);
export default Card;

const Container = styled.section`
  margin: 18px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.29);
  border-radius: 6px;
  padding: 32px 24px;
`;
const Label = styled.label`
  color: #00607e;
`;
const Bar = styled.hr`
  color: #ebeff4;
  margin: 2px;
`;
const Details = styled.div``;
