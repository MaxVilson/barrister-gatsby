import React, {useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw.div`relative -mx-8 px-8 mb-16 lg:mb-24 !bg-primary-800 text-gray-100`;

const Heading = styled(SectionHeading)`${tw`text-gray-200`}`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-8 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({ testimonials }) => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <PrimaryBackgroundContainer id="testimonials">
      <ContentWithPaddingXl>
        <Heading>Отзывы</Heading>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <Quote>
                  {testimonial.text}
                </Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerNameAndProfileContainer>
                  <CustomerName>
                    {testimonial.author}
                  </CustomerName>
                  <CustomerName>
                    {testimonial.date}
                  </CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-chevron-left">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </ControlButton>
                  <ControlButton onClick={sliderRef?.slickNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-chevron-right">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
