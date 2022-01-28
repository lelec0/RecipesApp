import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 25%;
  margin-left: 15px;
`;

export const FormContainer = styled.form`
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & input {
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    border-radius: 5px;
    padding: 1em;
    font-family: inherit;
    transition: 0.4s ease-in;

    &:focus {
      border: 1px solid #961b20;
    }
  }

  & button {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    background-color: #e82f3e;
    cursor: pointer;
    color: white;
    transition: 0.4s ease;
    font-family: inherit;

    &:hover {
      transform: scale(1.025);
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
    }
  }
`;
