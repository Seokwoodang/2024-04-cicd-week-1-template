import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/Button";

const Home = () => {
  const navigate = useNavigate();

  const throwError = () => {
    throw new Error("Intentional Error!");
  };

  return (
    <StBody>
      <div className="innerBody">
        <Button text="go Success" onClick={() => navigate(`/success`)} />
        성공해라 진짜
        <Button text="make Error" onClick={() => throwError()} />
      </div>
    </StBody>
  );
};

export const StBody = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .innerBody {
    display: grid;
    gap: 20px;
  }
`;

export default Home;
