import styled from 'styled-components';

export const DrinkCardContainer = styled.div`
  width: 100%;
  margin: 20px 40px;
  border: none;
  box-shadow: 5px 5px 5px #cbcbcb;
  border-radius: 10px;
`;

export const CardButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  font-size: 2.25em;
`;

export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardTitle = styled.p`
  color: #454545;
  margin: 10px 0;
`;
