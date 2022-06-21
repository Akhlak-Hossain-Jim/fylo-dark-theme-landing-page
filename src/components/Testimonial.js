import React from "react";
import styled from "styled-components";

export default function Testimonial() {
  const Testimonials = [
    {
      thought:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
      image: "profile-1.png",
    },
    {
      thought:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
      name: "Bruce McKenzle",
      title: "Founder & CEO, Huddle",
      image: "profile-2.png",
    },
    {
      thought:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
      image: "profile-3.png",
    },
  ];

  return (
    <Container>
      <div className="testimonial">
        <img
          src="/images/bg-quotes.png"
          alt="quotation mark"
          className="testimonial_img"
        />
        {React.Children.toArray(
          Testimonials.map((data) => (
            <div className="testimonial_card">
              <p className="testimonial_card__thought">{data.thought}</p>
              <div className="testimonial_card__profile">
                <div className="testimonial_card__profile_image">
                  <img src={`/images/${data.image}`} alt={data.title} />
                </div>
                <div className="testimonial_card__profile_description">
                  <div className="testimonial_card__profile_description__name">
                    {data.name}
                  </div>
                  <div className="testimonial_card__profile_description__designation">
                    {data.title}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: min(1254px, 100%);
  margin: 0 auto;
  padding: 92px 43.5px 50px 51.5px;
  @media (max-width: 548px) {
    padding: 89px 43.5px 50px;
  }
  .testimonial {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 41px;
    @media (max-width: 548px) {
      gap: 22px;
      flex-direction: column;
    }
    &_img {
      position: absolute;
      top: -37px;
      left: -8px;
      z-index: -1;
      @media (max-width: 548px) {
        top: -18px;
        left: 4px;
        width: 20px;
        img {
          width: 20px;
          height: auto;
        }
      }
    }
    &_card {
      width: min(359px, 100%);
      padding: 40px 28px 25px 26px;
      border-radius: 5px;
      background-color: var(--bg-testimonial);
      box-shadow: var(--box-shadow);
      @media (max-width: 548px) {
        padding: 22px 28px 16px 17px;
      }
      &__thought {
        font-weight: 400;
        font-size: 14px;
        line-height: 147%;
        letter-spacing: 0.033em;
        @media (max-width: 548px) {
          font-size: 10px;
          line-height: 165%;
          letter-spacing: -0.045em;
        }
      }
      &__profile {
        padding: 22px 0 0;
        display: flex;
        align-items: flex-end;
        gap: 6px;
        @media (max-width: 548px) {
          padding: 16px 0 0;
        }
        &_image {
          width: 28px;
          img {
            width: 100%;
            height: auto;
            object-position: top;
          }
          @media (max-width: 548px) {
            width: 23px;
          }
        }
        &_description {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 3px;
          @media (max-width: 548px) {
            gap: 2px;
          }
          &__name {
            font-weight: 700;
            font-size: 10px;
            line-height: 147%;
            letter-spacing: 0.05em;
            text-transform: capitalize;
            @media (max-width: 548px) {
              font-size: 9px;
            }
          }
          &__designation {
            font-weight: 700;
            font-size: 7px;
            line-height: 147%;
            letter-spacing: 0.063em;
            text-transform: capitalize;
            color: var(--bg-testimonial-color);
            font-family: var(--font-s);
            @media (max-width: 548px) {
              font-size: 6px;
              line-height: 147%;
              letter-spacing: 0.093em;
            }
          }
        }
      }
    }
  }
`;
