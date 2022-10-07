import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import iPhone from "../assets/iphone14.webp";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image style={{ objectFit: "cover" }} src={iPhone} />
          </ImgContainer>
          <InfoContainer>
            <Title>iPhone 14 PRO MAX</Title>
            <Description>
              GET NEW BRAND ON SALE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image style={{ objectFit: "cover" }} src={iPhone} />
          </ImgContainer>
          <InfoContainer>
            <Title>iPhone 14 PRO MAX</Title>
            <Description>
              GET NEW BRAND ON SALE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
