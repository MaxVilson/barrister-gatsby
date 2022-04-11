import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import cn from "classnames";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pb-16 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;
const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;
const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled(GatsbyImage)`${tw`h-80 bg-cover bg-center rounded`}`;
const CardText = tw.div`mt-4`;
const CardTitle = tw.h5`text-xl text-center mt-4 font-bold`;
const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;
const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({posts}) => {
  console.log(posts)
  return (
    <Container id="cases">
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={false}>
            <HeadingInfoContainer>
              <HeadingTitle>Кейсы</HeadingTitle>
              <HeadingDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</HeadingDescription>
              <PrimaryLink>
                Смотреть все кейсы
                <svg viewBox="0 0 31.49 31.49">
                  <path fill="currentColor" d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"/>
                </svg>
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {posts.map((post, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage
                  image={post.coverImage.small}
                  alt={`Cover Image for ${post.coverImage.title}`}
                />
                <CardText>
                  <CardTitle>{post.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="feather feather-clock">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {post.date}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="feather feather-map-pin">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Москва
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>Смотреть кейс</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
