import styled, { css } from "styled-components";

export const Body = styled.section`
  padding: 0 15%;

  ${(props) =>
    props.PTB &&
    css`
      padding-top: 5%;
      padding-bottom: 5%;
    `}
`;
