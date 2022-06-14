import styled, { css } from "styled-components";

const HEADER_HEIGHT = "60px";
const FOOTER_HEIGHT = "60px";

export const Header = styled.header`
  width: 100%;
  background-color: #f33;
  color: #fff;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5%;

  a {
    padding: 0 2%;
    font-weight: bold;
    font-size: 1em;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #232323;
  color: #fff;
  height: ${FOOTER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  position: abosoulte;
`;
