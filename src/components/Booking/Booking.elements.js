import styled from "styled-components";

export const BookingContainer = styled.div`
  width: 100vw;
  position: relative;
  height: 800px;
  @media screen and (min-height: 850px) {
    height: 100vh;
  }
`;

//Text

export const TextWrapper = styled.div`
  height: 20%;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 10%;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const MiniWrapper = styled.div`
  display: flex;
  text-align: Center;
  margin-bottom: 1em;
  margin-top: 1.5em;
  justify-content: center;
`;

export const Icon = styled.img`
  padding: 0 1em;
`;

export const Head = styled.h1`
  color: white;
  font-family: "Chivo", sans-serif;
  font-weight: 400;
  font-size: 1.7em;
  display: inline-block;
`;

export const Sub = styled.h3`
  color: white;
  font-family: "Overpass", sans-serif;
  font-weight: 200;
`;

//Form

export const FormWrapper = styled.div`
  height: 60%;
  width: 100%;
  position: absolute;
  bottom: 10%;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const Group2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 1em;
  font-family: "Overpass", sans-serif;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  background-color: transparent;
  border: 1px solid #ffc901;
  border-radius: 5px;
  color: white;

  ::placeholder {
    color: white;
    opacity: 0.5;
    font-size: 0.8em;
    font-family: "Overpass", sans-serif;
    font-weight: 200;
  }
`;

export const SelectionWrapper = styled.div`
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.5em;
  background-color: transparent;
  border: 1px solid #ffc901;
  border-radius: 5px;
  width: 100%;
  color: white;
`;

export const Option = styled.option`
  color: black;
  background-color: transparent;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const Button = styled.button`
  background-color: #ffc901;
  padding: 0.5em 3em;
  border: none;
  border-radius: 5px;
  font-size: 1.3em;
  font-family: "Overpass", sans-serif;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: #cc9900;
    border: 1px solid #a0a0a0;
  }
`;
