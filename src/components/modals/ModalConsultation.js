import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import tw from "twin.macro";

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '100',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '90%',
    maxWidth: '400px',
    transform: 'translate(-50%, -50%)',
  },
};

const Form = tw.form`w-full`;
const Wrapper = tw.div`flex flex-wrap mb-4`;
const Row = tw.div`w-full px-3`;
const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const Input = tw.input`py-3 px-3 border-2 w-full rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = tw.textarea`py-3 px-3 appearance-none block w-full border-2 text-gray-700 rounded leading-tight focus:outline-none hocus:border-primary-500 h-48 resize-none`;
const Button = tw.button`px-8 py-3 text-sm sm:text-base sm:px-8 sm:py-4 bg-primary-700 text-gray-100 font-bold rounded shadow transition duration-300 hocus:bg-primary-600 hocus:text-gray-200 focus:bg-primary-700`;

export default ({modalIsOpen, closeModal}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        preventScroll={true}
        contentLabel="Example Modal"
      >
        <Form action="https://www.flexyform.com/f/36247bbff147e311a187e09a1e2161a8a02b3c70" method="post">
          <Wrapper>
            <Row>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" type="text" />
            </Row>
          </Wrapper>
          <Wrapper>
            <Row>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="text" />
            </Row>
          </Wrapper>
          <Wrapper>
            <Row>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" />
            </Row>
          </Wrapper>
          <Wrapper>
            <Row>
              <Label htmlFor="message">Ваш вопрос</Label>
              <Textarea id="message" placeholder="Не обязательно"></Textarea>
            </Row>
          </Wrapper>
          <Wrapper>
            <Row>
              <Button type="submit">Отправить</Button>
            </Row>
          </Wrapper>
        </Form>
      </Modal>
    </div>
  );
}

