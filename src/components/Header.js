import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <nav>
        <div className="nav_link">Features</div>
        <div className="nav_link">Team</div>
        <div className="nav_link">Sign In</div>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  padding: 73px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 22px 21px 22px 18px;
  }
  .header_logo {
    width: min(176px, 100%);
    @media (max-width: 548px) {
      width: min(74px, 100%);
    }
    img {
      width: 100%;
      height: auto;
      object-position: center;
    }
  }
  nav {
    display: flex;
    justify-content: end;
    gap: 57.5px;
    @media (max-width: 768px) {
      gap: 21.5px;
      max-width: 100%;
      overflow: hidden;
    }
    .nav_link {
      font-family: var(--font-s);
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-transform: capitalize;
      color: var(--white);
      cursor: pointer;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      @media (max-width: 548px) {
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
`;
