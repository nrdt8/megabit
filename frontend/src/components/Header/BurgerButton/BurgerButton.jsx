import styled from "styled-components";

const StyledButton = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid var(--color-dark-3);
  background-color: var(--color-dark-4);
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-2);
  border-radius: 10px;
  transform-origin: center;
`;

const BurgerButton = ({ className, onClick, navActive }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {navActive ? (
        <StyledContainer>
          <StyledSpan style={{ transform: "rotate(45deg)" }} />
          <StyledSpan style={{ transform: "rotate(-45deg)" }} />
        </StyledContainer>
      ) : (
        <StyledContainer>
          <StyledSpan style={{ transform: "translateY(-6px)" }} />
          <StyledSpan />
          <StyledSpan style={{ transform: "translateY(6px)" }} />
        </StyledContainer>
      )}
    </StyledButton>
  );
};

export default BurgerButton;
