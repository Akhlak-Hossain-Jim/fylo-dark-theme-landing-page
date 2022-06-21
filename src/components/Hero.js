import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <Container>
        <Header />
        <div className="hero_contents">
          <div className="hero_contents__image">
            <img
              src="/images/illustration-intro.png"
              alt="intro illustration"
            />
          </div>
          <h1 className="hero_contents__title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="hero_contents__description">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, abd co-workers.
          </p>
          <button className="hero_contents__button">Get Started</button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.section`
  width: 100%;
  background-image: url("/images/hero-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom left;
  padding-bottom: 147px;
  @media (max-width: 548px) {
    background-position: top center;
    background-size: 100% 65%;
    padding-bottom: 68px;
  }
  .hero_contents {
    padding: 2px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 768px) {
      padding: 22px 30px;
    }
    &__image {
      width: min(724px, 100%);
      padding: 0 2px 37px;
      @media (max-width: 768px) {
        padding-bottom: 29px;
      }
      img {
        width: 100%;
        height: auto;
        object-position: center;
      }
    }
    &__title {
      width: min(678px, 100%);
      padding-bottom: 34px;
      font-family: var(--font-s);
      font-weight: 700;
      font-size: 42px;
      line-height: 140%;
      letter-spacing: -0.02em;
      @media (max-width: 548px) {
        padding-bottom: 13px;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: normal;
      }
    }
    &__description {
      width: min(585px, 100%);
      padding: 0 0 31px;
      font-weight: 400;
      font-size: 19px;
      line-height: 156%;
      letter-spacing: 0.025em;
      @media (max-width: 548px) {
        padding: 0 4.5px 29px;
        font-size: 13px;
        line-height: 145%;
        letter-spacing: normal;
      }
    }
    &__button {
      margin-bottom: 50px;
      width: min(280px, 100%);
      text-align: center;
      padding: 15px 22px 16px;
      font-family: var(--font-s);
      color: var(--white);
      background: var(--gradient);
      box-shadow: var(--box-shadow);
      border-radius: 28px;
      border: none;
      outline: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: -0.015em;
      &:hover {
        background: var(--gradient-hover);
      }
      @media (max-width: 548px) {
        width: min(217px, 100%);
        padding: 13px 22px 12px;
        font-size: 12px;
        line-height: 156%;
        letter-spacing: normal;
      }
    }
  }
`;
