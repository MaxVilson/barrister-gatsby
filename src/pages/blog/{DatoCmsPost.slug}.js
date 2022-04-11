import React from "react";
import tw from "twin.macro";
import { StructuredText } from "react-datocms";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage } from "gatsby-plugin-image";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/MiniCenteredFooter.js";

const Icon = tw.span`mr-[10px] mt-[2px]`
const Back = tw.a`inline-flex items-center mb-[32px] text-[22px] text-[rgba(41, 41, 41, 1)]`
const PostHeader = tw.h1`mb-[32px] leading-[40px] text-[32px] font-bold text-[rgba(41, 41, 41, 1)]`
const PostBody = tw.div`my-[32px] text-[20px] leading-[32px] text-[rgba(41, 41, 41, 1)]`

export default function BlogPost({ data: { post } }) {
  console.log(post)
  return (
    <AnimationRevealPage>
      <HelmetDatoCms seo={post.seo} />
      <Back href="/">
        <Icon>
          <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66691 6.46824L8.00706 11.8083C8.13057 11.9319 8.29545 12 8.47125 12C8.64706 12 8.81193 11.9319 8.93544 11.8083L9.32871 11.4151C9.58461 11.1589 9.58461 10.7425 9.32871 10.4867L4.84445 6.00249L9.33369 1.51326C9.4572 1.38965 9.52539 1.22487 9.52539 1.04916C9.52539 0.87326 9.4572 0.708481 9.33369 0.584775L8.94042 0.191705C8.81681 0.0680961 8.65203 -1.03003e-06 8.47623 -1.04539e-06C8.30043 -1.06076e-06 8.13555 0.068096 8.01204 0.191705L2.66691 5.53664C2.54311 5.66064 2.47511 5.8262 2.4755 6.00219C2.47511 6.17888 2.54311 6.34434 2.66691 6.46824Z"/>
          </svg>
        </Icon>
        Назад
      </Back>
      <article>
        <PostHeader>{post.title}</PostHeader>
        <GatsbyImage image={post.coverImage.gatsbyImageData} alt={post.title} />
        <PostBody>
          <StructuredText data={post.content} />
        </PostBody>
      </article>
      <Footer />
    </AnimationRevealPage>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      coverImage {
        gatsbyImageData(width: 1500)
      }
      content {
        value
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData(width: 700)
          }
        }
      }
    }
  }
`;
