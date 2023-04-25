import styled from "styled-components";

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: 0.4s;
    display: flex;
    align-items: center;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.textColor};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.switchActiveColor || "#2196F3"};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.switchActiveColor || "#2196F3"};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;

export const BoxToggleContainer = styled.div`
  flex: 1;
  margin: 0px 10px;
  margin-top: 10px;
`;

export const BoxToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 60px;
  margin-top: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    cursor: pointer;
    position: absolute;
    top: -10px;
    bottom: 0;
    left: -10px;
    right: 0;
    transition: 0.4s;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-around;

    &::before {
      position: absolute;
      content: "";
      height: 60px;
      width: 60px;
      left: 4px;
      bottom: 4px;
      background-color: #1b1b1b;
      transition: 0.4s;
      border-radius: 10%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.switchActiveColor || "#2196F3"};
  }

  input:focus + span {
    border: 1px solid #1b1b1b;
  }

  input:checked + span:before {
    transform: translateX(62.5px);
  }
`;
