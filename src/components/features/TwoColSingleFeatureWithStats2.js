import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import StatsIllustrationSrc from "../../images/svetlana2.jpg";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-16 lg:pb-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left`;
const Description = tw.ul`list-disc mt-4 pl-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-colorTitle`;
const DescriptionItem = tw.li`mb-2`;
const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-center md:text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-600`;

const description = [
  "являюсь членом Адвокатской палаты города Москвы (регистрационный номер в реестре адвокатов города Москвы 77/14666)",
  "мой стаж юридической деятельности составляет более 13 лет",
  "адвокатура для меня - это не только сфера моей профессиональной деятельности, но и моё призвание",
  "специализируюсь на защите по уголовным делам",
  "вдохновляюсь своими победами и довольными доверителями",
  "уверена, что только скрупулезный подход к работе приводит к хорошим результатам",
];

const statistics = [
  {
    key: "Довольных клиентов",
    value: "100+",
  },
  {
    key: "Заседаний",
    value: "1891+",
  },
  {
    key: "Поданых ходатайств",
    value: "10000+",
  },
];

export default ({
  subheading = "Моя задача - оказать каждому доверителю максимально эффективную юридическую помощь!",
  heading = "Адвокат Гуменюк Светлана Анатольевна",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,

  textOnLeft = false,
}) => {
  return (
    <Container id="about">
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (
            <Image imageSrc={imageSrc} css={imageCss} />
          ) : (
            <img src={imageSrc} css={imageCss} alt="" />
          )}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Subheading>{subheading}</Subheading>
            <Description>
              {description.map((descr, i) => (
                <DescriptionItem key={i}>{descr}</DescriptionItem>
              ))}
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
