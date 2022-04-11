import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import backgroundImage from "../../images/svetlana5.jpg";
import ModalConsultation from "../modals/ModalConsultation"

import Header, {
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${backgroundImage});
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2 mb-3`}
  }
`;
const SlantedBackground = styled.span`
  ${tw`relative text-primary-700 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;
const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 text-sm border-primary-700 font-medium`;
const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-primary-700 text-gray-100 font-bold rounded shadow transition duration-300 hocus:bg-primary-600 hocus:text-gray-200 focus:bg-primary-700`;


export default () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <OpacityOverlay />
      <ModalConsultation modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <HeroContainer>
        <StyledHeader />
        <TwoColumn>
          <LeftColumn>
            <Notification>
              Равенство прав не в том, что все ими пользуются, а в том, что они
              всем предоставлены.
            </Notification>
            <Heading>
              <span>Опытный адвокат</span>
              <br />
              <SlantedBackground>по защите ваших интересов.</SlantedBackground>
            </Heading>
            <PrimaryAction onClick={openModal}>Получить консультацию</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
