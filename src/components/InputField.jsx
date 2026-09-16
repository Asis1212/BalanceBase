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
    border: 2px solid #2d3748;
    border-radius: 12px;
    font-size: ${({fontSize}) => fontSize || "12px"};
    font-weight: 700;
    box-sizing: border-box;
    outline: none;
    font-family: inherit;
    color: #f0f4ff;
    background: #1e2535;
    text-align: ${({type}) => type === "date" ? "left" : "right"};
    transition: border-color 0.15s, box-shadow 0.15s;

    &::placeholder {
        color: #4a5568;
        font-weight: 400;
    }

    &:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(0.7);
    }
`;
