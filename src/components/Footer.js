import React from "react";
import styled from "styled-components";

export default function Footer() {
  // icons
  const Facebook = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="30" height="30" rx="15" stroke="white" />
      <path
        d="M18.9904 16.4375L19.407 13.7229H16.8022V11.9612C16.8022 11.2186 17.1661 10.4946 18.3327 10.4946H19.5169V8.1834C19.5169 8.1834 18.4423 8 17.4148 8C15.2697 8 13.8676 9.3002 13.8676 11.6539V13.7229H11.4831V16.4375H13.8676V23H16.8022V16.4375H18.9904Z"
        fill="white"
      />
    </svg>
  );

  const Twitter = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="30" height="30" rx="15" stroke="white" />
      <path
        d="M23 11.4064C22.4758 11.6255 21.9197 11.7692 21.3503 11.8327C21.9504 11.4945 22.3993 10.962 22.6132 10.3345C22.0494 10.6499 21.4325 10.8722 20.7892 10.9917C20.5205 10.7213 20.1958 10.5059 19.8351 10.3588C19.4745 10.2117 19.0856 10.136 18.6927 10.1365C16.8382 10.1365 15.4756 11.7678 15.8944 13.4612C14.7525 13.4073 13.6353 13.1276 12.6155 12.6402C11.5956 12.1528 10.6959 11.4686 9.97475 10.632C9.60753 11.2282 9.495 11.934 9.66003 12.6057C9.82507 13.2773 10.2553 13.8645 10.8632 14.2477C10.4073 14.2342 9.96148 14.118 9.56292 13.9089C9.53142 15.1635 10.4852 16.3372 11.8665 16.5984C11.4434 16.7068 10.9997 16.7226 10.5692 16.6446C10.7526 17.1827 11.1099 17.6533 11.5911 17.9905C12.0722 18.3277 12.6531 18.5146 13.2525 18.5251C12.0486 19.4155 10.5192 19.819 9 19.6471C10.3134 20.4427 11.8419 20.865 13.403 20.8637C18.7358 20.8637 21.7487 16.6171 21.5667 12.8084C22.1289 12.4249 22.6142 11.9502 23 11.4064Z"
        fill="white"
      />
    </svg>
  );

  const Instagram = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="30" height="30" rx="15" stroke="white" />
      <path
        d="M15 9.35188C16.869 9.35188 17.0907 9.35938 17.8292 9.39562C19.7262 9.48813 20.6122 10.4525 20.6986 12.47C20.7324 13.2606 20.7388 13.4981 20.7388 15.5006C20.7388 17.5037 20.7318 17.7406 20.6986 18.5312C20.6117 20.5469 19.7279 21.5131 17.8292 21.6056C17.0907 21.6419 16.8702 21.6494 15 21.6494C13.131 21.6494 12.9093 21.6419 12.1714 21.6056C10.2697 21.5125 9.38833 20.5438 9.302 18.5306C9.26817 17.74 9.26117 17.5031 9.26117 15.5C9.26117 13.4975 9.26875 13.2606 9.302 12.4694C9.38892 10.4525 10.2727 9.4875 12.1714 9.395C12.9099 9.35938 13.131 9.35188 15 9.35188ZM15 8C13.0989 8 12.8609 8.00875 12.1142 8.045C9.57208 8.17 8.15925 9.68125 8.04258 12.4075C8.00817 13.2081 8 13.4631 8 15.5C8 17.5369 8.00817 17.7925 8.042 18.5925C8.15867 21.3162 9.56917 22.83 12.1137 22.955C12.8609 22.9913 13.0989 23 15 23C16.9011 23 17.1397 22.9913 17.8863 22.955C20.4262 22.83 21.8425 21.3188 21.9574 18.5925C21.9918 17.7925 22 17.5369 22 15.5C22 13.4631 21.9918 13.2081 21.958 12.4081C21.8437 9.68687 20.4314 8.17063 17.8869 8.04563C17.1397 8.00875 16.9011 8 15 8ZM15 11.6487C14.528 11.6487 14.0605 11.7484 13.6244 11.9419C13.1883 12.1355 12.7921 12.4191 12.4583 12.7768C12.1245 13.1344 11.8598 13.5589 11.6791 14.0262C11.4985 14.4934 11.4055 14.9942 11.4055 15.5C11.4055 16.0058 11.4985 16.5066 11.6791 16.9738C11.8598 17.4411 12.1245 17.8656 12.4583 18.2232C12.7921 18.5809 13.1883 18.8645 13.6244 19.0581C14.0605 19.2516 14.528 19.3513 15 19.3513C15.9533 19.3513 16.8676 18.9455 17.5417 18.2232C18.2158 17.501 18.5945 16.5214 18.5945 15.5C18.5945 14.4786 18.2158 13.499 17.5417 12.7768C16.8676 12.0545 15.9533 11.6487 15 11.6487ZM15 18C14.3812 18 13.7877 17.7366 13.3501 17.2678C12.9125 16.7989 12.6667 16.163 12.6667 15.5C12.6667 14.837 12.9125 14.2011 13.3501 13.7322C13.7877 13.2634 14.3812 13 15 13C15.6188 13 16.2123 13.2634 16.6499 13.7322C17.0875 14.2011 17.3333 14.837 17.3333 15.5C17.3333 16.163 17.0875 16.7989 16.6499 17.2678C16.2123 17.7366 15.6188 18 15 18ZM18.7368 10.5969C18.6265 10.5969 18.5172 10.6202 18.4153 10.6654C18.3133 10.7107 18.2207 10.777 18.1427 10.8606C18.0646 10.9442 18.0027 11.0434 17.9605 11.1527C17.9183 11.2619 17.8965 11.379 17.8965 11.4972C17.8965 11.6154 17.9183 11.7325 17.9605 11.8417C18.0027 11.951 18.0646 12.0502 18.1427 12.1338C18.2207 12.2174 18.3133 12.2837 18.4153 12.329C18.5172 12.3742 18.6265 12.3975 18.7368 12.3975C18.9597 12.3975 19.1734 12.3026 19.331 12.1338C19.4886 11.965 19.5771 11.736 19.5771 11.4972C19.5771 11.2584 19.4886 11.0294 19.331 10.8606C19.1734 10.6917 18.9597 10.5969 18.7368 10.5969Z"
        fill="white"
      />
    </svg>
  );

  // links array
  const LinksTitles = [
    {
      titles: ["About us", "Jobs", "Press", "Blog"],
    },
    {
      titles: ["Contact Us", "Terms", "Privacy"],
    },
  ];

  const Links = [
    {
      titles: ["", "", "", ""],
    },
    {
      titles: ["", "", ""],
    },
  ];

  const SocialLinks = ["", "", ""];
  const SocialIcons = [<Facebook />, <Twitter />, <Instagram />];

  return (
    <Container>
      <div className="footer_content">
        <div className="footer_content__logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="footer_content__box">
          <div className="footer_content__box_address">
            <div className="footer_content__box_address__image">
              <img src="/images/icon-location.svg" alt="location icon" />
            </div>
            <p className="footer_content__box_address__address">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="footer_content__box_callEmail">
            <div className="footer_content__box_callEmail__call">
              <div className="footer_content__box_callEmail__call_icon">
                <img src="/images/icon-phone.svg" alt="phone icon" />
              </div>
              <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
            </div>
            <div className="footer_content__box_callEmail__email">
              <div className="img footer_content__box_callEmail__email_icon">
                <img src="/images/icon-email.svg" alt="email icon" />
              </div>
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </div>
          </div>
          <div className="footer_content__box_links">
            {React.Children.toArray(
              LinksTitles.map((data, index) => (
                <div className="footer_content__box_links__container">
                  {React.Children.toArray(
                    data.titles.map((linkName, i) => (
                      <a
                        href={Links[index].titles[i]}
                        className="footer_content__box_links__container_link"
                        onClick={(e) =>
                          Links[index].titles[i] === "" && e.preventDefault()
                        }
                      >
                        {linkName}
                      </a>
                    ))
                  )}
                </div>
              ))
            )}
          </div>
          <div className="footer_content__box_socialLinks">
            {React.Children.toArray(
              SocialLinks.map((data, index) => (
                <a
                  href={data}
                  className="footer_content__box_socialLinks__link"
                  onClick={(e) => data === "" && e.preventDefault()}
                >
                  {SocialIcons[index]}
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--bg-footer);
  .footer_content {
    padding: 200px 0 93px 39px;
    width: min(1239px, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 1349px) {
      padding-left: 50px;
      padding-right: 60px;
    }
    @media (max-width: 548px) {
      padding: 224px 29px 39px 25px;
    }
    &__logo {
      width: min(176px, 100%);
      img {
        width: 100%;
        height: auto;
        object-position: top;
      }
      @media (max-width: 548px) {
        width: min(160px, 100%);
      }
    }
    &__box {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      @media (max-width: 548px) {
        flex-direction: column;
      }
      &_address {
        width: min(367px, 100%);
        display: flex;
        gap: 27px;
        padding-top: 29px;
        @media (max-width: 548px) {
          gap: 24px;
          padding-top: 33px;
        }
        &__image {
          padding-top: 5px;
        }
        &__address {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          @media (max-width: 548px) {
            font-size: 15px;
            line-height: 145%;
            letter-spacing: -0.015em;
          }
        }
      }
      &_callEmail {
        display: flex;
        flex-direction: column;
        gap: 19px;
        padding: 29px 0 0 94px;
        @media (max-width: 738px) {
          padding: 29px 94px 0 0;
        }
        @media (max-width: 548px) {
          gap: 17px;
          padding: 13px 0 0 0;
        }
        &__call,
        &__email {
          display: flex;
          align-items: center;
          gap: 24px;
          @media (max-width: 548px) {
            gap: 14px;
          }
          & > a {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: var(--white);
            text-decoration: none;
            @media (max-width: 548px) {
              font-size: 13px;
            }
          }
        }
      }
      &_links {
        display: flex;
        gap: 80px;
        padding: 29px 0 0 147px;
        @media (max-width: 768px) {
          padding: 40px 0 0 0;
        }
        @media (max-width: 548px) {
          gap: 41px;
          padding: 73px 0 0 0;
          flex-direction: column;
        }
        &__container {
          display: flex;
          gap: 12px;
          flex-direction: column;
          @media (max-width: 548px) {
            gap: 11px;
          }
          &_link {
            font-weight: 400;
            font-size: 17px;
            line-height: 150%;
            letter-spacing: -0.033em;
            color: var(--white);
            text-decoration: none;
            &:hover {
              font-weight: 700;
            }
            @media (max-width: 548px) {
              font-size: 15px;
              line-height: 150%;
              letter-spacing: -0.013em;
            }
          }
        }
      }
      &_socialLinks {
        display: flex;
        gap: 13px;
        padding: 29px 0 0 72px;
        align-items: center;
        @media (max-width: 768px) {
          padding: 40px 0 0 72px;
        }
        @media (max-width: 548px) {
          gap: 10px;
          width: 100%;
          padding: 71px 0 0 0;
          justify-content: center;
        }
        &__link {
          &:hover {
            & > svg > path {
              fill: var(--cyan);
            }

            & > svg > rect {
              stroke: var(--cyan);
            }
          }
        }
      }
    }
  }
`;
