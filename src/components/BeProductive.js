import React from "react";
import styled from "styled-components";

export default function BeProductive() {
  const IconArrow = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_346_7)">
        <path
          d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
          fill="black"
        />
      </g>
      <path
        className="changeable_path"
        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
        fill="#62E0D9"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.65474 6.75L9.24637 7.14375L10.8799 8.71875H5.99962V9.28125H10.8799L9.24749 10.8562L9.65587 11.25L11.9891 9L9.65474 6.75Z"
        fill="#1B2330"
      />
      <defs>
        <filter
          id="filter0_d_346_7"
          x="0.25"
          y="0.25"
          width="17.5"
          height="17.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.384314 0 0 0 0 0.878431 0 0 0 0 0.85098 0 0 0 0.811141 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_346_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_346_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <Container>
      <div className="beProductive_left">
        <img
          src="/images/illustration-stay-productive.png"
          alt="Stay productive illustration"
        />
      </div>
      <div className="beProductive_right">
        <h2 className="beProductive_right__title">
          Stay productive, wherever you are
        </h2>
        <p className="beProductive_right__description">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="beProductive_right__description">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="/"
          className="beProductive_right__link"
          onClick={(e) => e.preventDefault()}
        >
          See how Fylo works <IconArrow />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: min(1222px, 100%);
  margin: 0 auto;
  padding: 85px 8px 50px 0;
  display: flex;
  align-items: center;
  gap: 56px;
  @media (max-width: 548px) {
    margin: 0;
    flex-direction: column;
    padding: 96px 25px 50px;
    gap: 42px;
  }
  .beProductive_left {
    flex: 1;
    img {
      width: 100%;
      height: auto;
    }
    @media (max-width: 548px) {
      padding: 0 7px;
    }
  }
  .beProductive_right {
    width: min(515px, 100%);
    &__title {
      width: min(339px, 100%);
      padding-bottom: 17px;
      font-family: var(--font-s);
      font-weight: 700;
      font-size: 41px;
      line-height: 125%;
      letter-spacing: -0.005em;
      @media (max-width: 548px) {
        padding-bottom: 16px;
        font-size: 17px;
        letter-spacing: -0.01em;
      }
    }
    &__description {
      padding-bottom: 16px;
      font-weight: 400;
      font-size: 17px;
      line-height: 143%;
      letter-spacing: -0.027em;
      @media (max-width: 548px) {
        padding-bottom: 14px;
        font-size: 14px;
        line-height: 135%;
        letter-spacing: -0.044em;
      }
    }
    &__link {
      display: flex;
      align-items: center;
      gap: 5px;
      padding-top: 7px;
      padding-bottom: 4px;
      border-bottom: 1px solid var(--cyan);
      color: var(--cyan);
      font-weight: 400;
      font-size: 17px;
      line-height: 143%;
      letter-spacing: -0.027em;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      text-decoration: none;
      width: max-content;
      &:hover {
        color: var(--white);
        border-bottom-color: var(--white);
        svg {
          .changeable_path {
            fill: var(--white);
          }
        }
      }
      @media (max-width: 548px) {
        padding-top: 0px;
        padding-bottom: 3px;
        gap: 4px;
        font-size: 12px;
        letter-spacing: -0.047em;
      }
    }
  }
`;
