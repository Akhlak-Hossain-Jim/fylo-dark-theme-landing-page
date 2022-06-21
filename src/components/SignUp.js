import React from "react";
import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
      <div className="signUp">
        <h1 className="signUp_title">Get early access today</h1>
        <div className="p signUp_details">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. if you have any questions, our support team would
          be happy to help you.
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="signUp_form">
          <input
            type="email"
            className="signUp_form__input"
            placeholder="email@example.com"
            required
          />
          <div className="signUp_form__input__error">
            Please enter a valid email address
          </div>
          <button className="signUp_form__button" value="submit">
            Get Started For Free
          </button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: min(862px, 100%);
  margin: 0 auto -115px;
  @media (max-width: 900px) {
    margin: 0 auto -160px;
    padding: 0 18px;
  }
  .signUp {
    margin-top: 153px;
    padding: 41px 76.5px 40px;
    background-color: var(--bg-secondary);
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    width: 100%;
    text-align: center;
    @media (max-width: 548px) {
      margin-top: 96px;
      padding: 34px 25.5px;
    }
    &_title {
      font-weight: 700;
      font-size: 32px;
      line-height: 140%;
      letter-spacing: 0.005em;
      font-size: var(--font-s);
      @media (max-width: 548px) {
        font-size: 17px;
        letter-spacing: -0.02em;
      }
    }
    &_details {
      padding-top: 18px;
      width: min(626px, 100%);
      font-weight: 400;
      font-size: 14px;
      line-height: 147%;
      opacity: 0.8;
      @media (max-width: 548px) {
        padding-top: 13px;
        font-size: 12px;
        letter-spacing: -0.01em;
      }
    }
    &_form {
      position: relative;
      padding-top: 38px;
      display: flex;
      align-items: center;
      gap: 29px;
      @media (max-width: 548px) {
        padding-top: 30px;
        flex-direction: column;
        gap: 22px;
      }
      &__input {
        flex: 1;
        padding: 19px 28px 17px 38px;
        border-radius: 28px;
        background-color: var(--white);
        border: none;
        outline: none;
        color: var(--bg-secondary);
        &::placeholder {
          color: var(--bg-testimonial-color);
        }
        @media (max-width: 548px) {
          padding: 18px 26px 16px;
          width: 100%;
        }
        & + .signUp_form__input__error {
          display: none;
        }
        &:focus:invalid {
          & + .signUp_form__input__error {
            display: inline-block;
            position: absolute;
            bottom: -18px;
            left: 39px;
            font-weight: 700;
            font-size: 10px;
            line-height: 100%;
            color: var(--red);
            @media (max-width: 548px) {
              left: 0;
              bottom: 0;
              position: inherit;
              text-align: center;
            }
          }
        }
      }

      &__button {
        width: min(200px, 100%);
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
          width: 100%;
          padding: 13px 22px 12px;
          font-size: 12px;
          line-height: 156%;
          letter-spacing: normal;
        }
      }
    }
  }
`;
