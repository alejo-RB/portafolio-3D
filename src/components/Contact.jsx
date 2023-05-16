import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

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
  color: black;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 3px;
  color: black;
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
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjsy1q1",
        "template_tgacr9q",
        ref.current,
        "AGy475iyLYZZxWec1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={5}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
