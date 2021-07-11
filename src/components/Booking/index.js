import React from "react";
import img1 from "../../images/1.png";

import {
  BookingContainer,
  TextWrapper,
  Sub,
  Form,
  FormItem,
  FormWrapper,
  Label,
  Input,
  Button,
  ButtonWrapper,
  Group1,
  Group2,
  SelectionWrapper,
  Select,
  Option,
  MiniWrapper,
  Head,
  Icon,
} from "./Booking.elements";

const Booking = () => {
  return (
    <>
      <BookingContainer id="booking">
        <TextWrapper>
          <MiniWrapper>
            <Icon src={img1} alt="img" />
            <Head>BOOK NOW</Head> <Icon src={img1} alt="img" />
          </MiniWrapper>
          <Sub>Book Your Table Now And Have A Great Meal!</Sub>
        </TextWrapper>
        <FormWrapper>
          <Form>
            <Group1>
              <FormItem>
                <Label>Your full name ?</Label>
                <Input type="text" placeholder="Write your name here ..." />
              </FormItem>
              <FormItem>
                <Label>How many people?</Label>
                <SelectionWrapper>
                  <Select>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                  </Select>
                </SelectionWrapper>
              </FormItem>
              <FormItem>
                <Label>What is the date ?</Label>
                <Input type="date" />
              </FormItem>
            </Group1>
            <Group2>
              <FormItem>
                <Label>Your email address?</Label>
                <Input type="email" placeholder="Write your email here ..." />
              </FormItem>
              <FormItem>
                <Label>What time?</Label>
                <Input type="time" />
              </FormItem>
              <FormItem>
                <Label>Your phone number ?</Label>
                <Input type="text" placeholder="Write your number here ..." />
              </FormItem>
            </Group2>
          </Form>
        </FormWrapper>

        <ButtonWrapper>
          <Button>Submit</Button>
        </ButtonWrapper>
      </BookingContainer>
    </>
  );
};

export default Booking;
