import styled from "styled-components";

function LabelField({ labelText }) {
  return <Label>{labelText}</Label>;
}

export default LabelField;

const Label = styled.label`
  display: block;
  font-size: 13px;
  color: #888;
  margin-bottom: 6px;
`;
