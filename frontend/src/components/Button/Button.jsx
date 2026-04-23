import styled from "styled-components";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["hoverTextColor", "hoverBorderColor", "fontSize"].includes(prop),
})`
  padding: 10px 20px;
  background-color: var(--color-blue-1);
  color: var(--color-white);
  border-radius: 10px;
  border: 2px solid var(--color-blue-1);
  font-weight: 500;
  transition-duration: var(--transition-duration);
  font-size: ${(props) => props.fontSize || "16px"};

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    color: ${(props) => props.hoverTextColor || "var(--color-white)"};
    border: 2px solid
      ${(props) => props.hoverBorderColor || "var(--color-white)"};
  }
`;

const Button = ({
  children,
  className,
  hoverTextColor,
  hoverBorderColor,
  fontSize,
  onClick,
  type,
  ...rest
}) => {
  return (
    <StyledButton
      hoverTextColor={hoverTextColor}
      hoverBorderColor={hoverBorderColor}
      fontSize={fontSize}
      type={type}
      {...rest}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
