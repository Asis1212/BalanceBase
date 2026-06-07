import styled from "styled-components";

function InputField({type, placeholder, onChange, value, fontSize}) {
    return(
        <Input 
            type={type}
            value={value && value}
            placeholder={placeholder ? placeholder : ""}
            onChange={onChange ? onChange : null}
            fontSize={fontSize}
        />
    )
}

export default InputField;

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #f0e8e0;
    border-radius: 12px;
    font-size: ${({fontSize}) => fontSize || "12px"};
    font-weight: 700;
    box-sizing: border-box;
    outline: none;
    font-family: inherit;
    color: #2d2d2d;
    text-align: ${({type}) => type === "date" ? "left" : "right"};
`;