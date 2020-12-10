import styled from "styled-components";

export const FormWrapper = styled.section`
  width: 100%;
  height: 90px;
`;

export const FormContainer = styled.form`
  width: 450px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.palette.lightGray};
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px;

  background: transparent;
  text-align: center;
  color: ${(props) => props.theme.palette.blue};
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  border: none;
  outline: none;
  &:focus {
    border-bottom-color: ${(props) => props.theme.palette.blue};
  }
`;

export const SubmitInput = styled.button`
  width: 50px;
  height: 30px;
  margin: 10px 0;
  padding: 3px;

  text-align: center;
  background-color: transparent;
  outline: none;
  color: ${(props) => props.theme.palette.blue};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSizes.large};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.palette.goodGreen};
  }
`;

export const RequireMessage = styled.span`
  width: 60px;
  height: 40px;
  padding: 10px;

  text-align: center;
  color: ${(props) => props.theme.palette.wrongRed};
`;
