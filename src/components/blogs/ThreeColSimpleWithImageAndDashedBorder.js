import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pb-16 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-12 lg:w-1/3`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded-[10px]`,
]);
const Details = tw.div`px-1 rounded rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const Title = tw.h5`h-[50px] mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 h-[100px] text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

export default ({ posts }) => {
  return (
    <Container id="blog">
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Блог</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {posts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.coverImage.gatsbyImageData.images.fallback.src} />
                <Details>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={`/blog/${post.slug}`}>Чиатать</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
