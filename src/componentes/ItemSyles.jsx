import styled from "styled-components";

export const StyledItem = styled.div`
  height: 60px;
  width: 500px;
  /* background-color: aquamarine; */
  background-color: ${(props) => props.completed ? 'gray' : 'midnightblue' };  //aquamarine;
  text-decoration: ${(props) => props.completed ? 'line-through' : 'none' };
  color: turquoise;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* border: 1px solid turquoise; */
  border-radius: 8px;
  box-shadow: 0 0 8px -3px turquoise;
  gap: 10px;
  font-size: 22px;

  button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  }

  .item-left {
    display: flex;
    justify-content: center;
    gap: 4px;
    text-align: left;
  }
`;

export const StyledForm = styled.div`
  height: 60px;
  width: 500px;
  background-color: aquamarine;
  color: darkblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: #fafafaca;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    padding: 0 8px;
  }

  button {
  border: none;
  background-color: #cacacaca;
  cursor: pointer;
  font-size: 18px;
  padding: 6px;
  border-radius: 8px;
  }

`;
