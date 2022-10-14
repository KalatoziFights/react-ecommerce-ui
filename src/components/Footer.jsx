import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { AiFillFacebook, AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex; ;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ color }) => color};
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>REACT.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <BsInstagram />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <FaTwitterSquare />
          </SocialIcon>
          <SocialIcon color="#171515 ">
            <BsGithub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FiMapPin style={{ marginRight: "10px" }} /> 622 Chavchavadze Street,
          South Tbilisi 98336
        </ContactItem>
        <ContactItem>
          <AiTwotonePhone style={{ marginRight: "10px" }} /> + 995 555 55 55 55
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "10px" }} />
          contact@fallenprodigy.dev
        </ContactItem>
        <Payment src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png" />
      </Right>
    </Container>
  );
};

export default Footer;
