import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
  theme,
} from '@chakra-ui/react';
import EnquiryForm from './EnquiryForm';

function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const modalOpener = (evt) => {
      evt.stopImmediatePropagation();
      onOpen()
    }

    const tabListener = () => {
      document.querySelectorAll("[href='#get-a-quote']").forEach(
        (el) => {
          el.addEventListener('click', (evt) => modalOpener(evt));
        }
      );
    }

    window.addEventListener('DOMContentLoaded', tabListener);

    return () => {
      window.removeEventListener('DOMContentLoaded', tabListener);
      document.querySelectorAll("[href='#get-a-quote']").forEach(
        (el) => {
          el.removeEventListener('click', (evt) => modalOpener(evt));
        }
      );
    };
  }, [onOpen]);
  
  return (
    <ChakraProvider theme={theme}>
      <Button onClick={onOpen}>GET A QUOTE</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>For a free quote fill in the form below</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EnquiryForm artistID={props.artistID}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
