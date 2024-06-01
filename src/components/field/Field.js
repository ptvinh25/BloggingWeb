import React from "react";
import styled from "styled-components";

const FieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: flex-start;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const Field = ({ children }) => {
  return <FieldStyle>{children}</FieldStyle>;
};

export default Field;
