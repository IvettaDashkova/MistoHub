import { StyledContainer } from "./Container.styled";

const Container = ({ children, ...restProps }) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default Container;
