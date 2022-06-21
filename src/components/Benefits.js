import React from "react";
import styled from "styled-components";

export default function Benefits() {
  const benefits = [
    {
      icon: "access-anywhere",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: "security",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: "collaboration",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: "any-file",
      title: "Store any type of file",
      description:
        "Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  return (
    <Container>
      {React.Children.toArray(
        benefits.map((data) => (
          <div className="benefit_box">
            <div className="benefit_box__image">
              <img
                src={`/images/icon-${data.icon}.svg`}
                alt={`${data.title} illustration`}
              />
            </div>
            <div className="benefit_box__title">{data.title}</div>
            <div className="benefit_box__description">{data.description}</div>
          </div>
        ))
      )}
    </Container>
  );
}

const Container = styled.section`
  width: min(962px, 100%);
  margin: -30px auto 0;
  padding: 0 32px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 95px;
  @media (max-width: 548px) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    gap: 79px;
  }
  .benefit_box {
    width: min(386px, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    &__image {
      height: 88px;
    }
    &__title {
      padding-top: 21px;
      padding-top: 6px;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: 0.005em;
      font-family: var(--font-s);
      @media (max-width: 548px) {
        padding-top: 23px;
        padding-bottom: 8px;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0.015em;
      }
    }
    &__description {
      font-weight: 400;
      font-size: 15px;
      line-height: 143%;
      text-align: center;
      letter-spacing: -0.03em;
      @media (max-width: 548px) {
        font-size: 13px;
        letter-spacing: -0.01em;
      }
    }
  }
`;
