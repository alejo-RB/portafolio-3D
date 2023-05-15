import React from "react";
import styled from "styled-components";
import Map from './Map'
import { handler } from "tailwind-scrollbar-hide";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-size: 30px;
  //font-weight: bold;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 12px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleS}>
            <Title>Contact Us</Title>
            <Input placeholder="Name"/>
            <Input placeholder="Email"/>
            <TextArea placeholder="Write your message" rows={5}/>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map></Map>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
