import styled from "styled-components";
import { theme } from "../../style/theme";

export const FormWrapper = styled.section`
  width: 100%;
  height: 10%;
`;

export const FormContainer = styled.form`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px;

  background: transparent;
  text-align: center;
  color: ${(props) => theme.palette.blue};
  font-size: ${(props) => theme.fontSizes.xLarge};
  border: none;
  border-bottom: 2px solid ${(props) => theme.palette.lightGray};
  outline: none;
  &:focus {
    border-bottom-color: ${(props) => theme.palette.blue};
  }
`;

export const SubmitInput = styled.button`
  width: 60px;
  height: 40px;
  margin-left: 20px;
  padding: 10px;

  background-color: transparent;
  outline: none;
  // border: 2px solid ${(props) => theme.palette.goodGreen};
  color: ${(props) => theme.palette.goodGreen};
  border-radius: 10px;
  font-size: ${(props) => theme.fontSizes.normal};
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => theme.palette.goodGreen};
    color: ${(props) => theme.palette.white};
  }
`;

export const RequireMessage = styled.span`
  width: 60px;
  height: 40px;
  margin-left: 20px;
  padding: 10px;

  color: ${(props) => theme.palette.wrongRed};
`;
