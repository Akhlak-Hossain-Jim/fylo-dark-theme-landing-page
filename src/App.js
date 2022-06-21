import styled from "styled-components";
import Benefits from "./components/Benefits";
import BeProductive from "./components/BeProductive";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <Container>
      <Hero />
      <Benefits />
      <BeProductive />
      <Testimonial />
      <SignUp />
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;
