import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings.js";

// import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-16 lg:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-[2rem] xl:text-[3rem]`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`w-full flex items-center justify-center text-center leading-7 mx-auto max-w-xs items-center px-6 py-6 border-2 border-dashed border-primary-600 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl text-colorTitle`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

export default () => {
  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Умышленное причинение тяжкого вреда здоровью",
    },
    {
      imageSrc: SupportIconImage,
      title:
        "Мошенничество (в сфере кредитования, в сфере страхования, при получении выплат)",
    },
    { imageSrc: CustomizeIconImage, title: "Присвоение / растрата" },
    { imageSrc: ReliableIconImage, title: "Незаконное предпринимательство" },
    { imageSrc: FastIconImage, title: "Незаконная банковская деятельность" },
    {
      imageSrc: SimpleIconImage,
      title: "Легализация (отмывание) денежных средств или иного имущества",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Преднамеренное / фиктивное банкротство",
    },
    { imageSrc: ReliableIconImage, title: "Коммерческий подкуп" },
    {
      imageSrc: FastIconImage,
      title:
        "Нарушение правил дорожного движения и эксплуатации транспортных средств",
    },
    {
      imageSrc: SimpleIconImage,
      title:
        "Незаконные получение и разглашение сведений, составляющих коммерческую, налоговую, банковскую тайну",
    },
    {
      imageSrc: CustomizeIconImage,
      title:
        "Незаконный оборот наркотических средств, психотропных веществ или их аналогов",
    },
    { imageSrc: ReliableIconImage, title: "Получение взятки, дача взятки" },
  ];

  return (
    <Container id="services">
      <ThreeColumnContainer>
        <Heading>
          Специализируюсь на защите по таким категориям
          <span tw="text-primary-600"> уголовных дел:</span>
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="title">{card.title}</span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
