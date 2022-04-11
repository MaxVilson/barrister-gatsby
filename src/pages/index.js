import React from "react";
import { graphql } from "gatsby";
import { css } from "styled-components/macro"; //eslint-disable-line
import {HelmetDatoCms} from "gatsby-source-datocms";
import "tailwindcss/dist/base.css";
import '../assets/styles/index.css';
import Seo from '../components/seo/Seo';
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImage.js";
import Features from "../components/features/DashedBorderSixFeatures";
// import Cases from "../components/cards/PortfolioTwoCardsWithImage.js";
import Testimonial from "../components/testimonials/SimplePrimaryBackground.js";
import Blog from "../components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import MainFeature from "../components/features/TwoColSingleFeatureWithStats2";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustration.js";
import ContactMap from "../components/contacts/ContactMap.js";
import Footer from "../components/footers/MiniCenteredFooter.js";

export default function Index({ data: { testimonials, posts, site } }) {
  return (
    <AnimationRevealPage>
      <Seo />
      <Hero />
      <Features />
      {/*<Cases posts={allPosts.nodes} />*/}
      <Testimonial testimonials={testimonials.nodes}/>
      <Blog posts={posts.nodes} />
      <MainFeature />
      <ContactUsForm />
      <ContactMap />
      <Footer />
    </AnimationRevealPage>
  );
}

export const query = graphql`
  {
    testimonials: allDatoCmsTestimonial {
      nodes {
        author
        text
        date
      }
    },
    
    posts: allDatoCmsPost {
      nodes {
        title
        description
        slug
        coverImage {
          gatsbyImageData
        }
      }
    }
  }
`;