import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* ${mobile({ height: "30vh" })} */
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const Title = styled.h1`
  color: #fff;
`;
const Button = styled.button`
  border: 0;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #000;
    scale: 1.1;
    font-weight: 700;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
