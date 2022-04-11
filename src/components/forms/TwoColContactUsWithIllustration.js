import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import EmailIllustrationSrc from "../../images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-16 lg:pb-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex items-center flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-md`;
const Input = tw.input`mb-4 border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block`;

export default ({
  heading = (
    <>
      Заявка на <span tw="text-primary-600">консультацию</span>
    </>
  ),
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <img src={EmailIllustrationSrc} alt="EmailIllustrationSrc"/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Form action="https://www.flexyform.com/f/36247bbff147e311a187e09a1e2161a8a02b3c70" method="post">
              <Input type="text" name="name" placeholder="Имя" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="tel" name="phone" placeholder="Телефон" />
              <SubmitButton type="submit">Отправить</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
