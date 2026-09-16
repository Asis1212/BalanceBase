import styled from "styled-components";

function LabelField({ labelText }) {
  return <Label>{labelText}</Label>;
}

export default LabelField;

const Label = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #8b9dc3;
  margin-bottom: 7px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;
