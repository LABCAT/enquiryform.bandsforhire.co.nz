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
  extendTheme,
} from '@chakra-ui/react';
import EnquiryForm from './EnquiryForm';

function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: null,
          lineHeight: null,
          color:  null,
          backgroundColor: null,
        }
      }
    }
  });

  useEffect(() => {
    const tabReplacer = () => {
      document.querySelectorAll("[href='#get-a-quote']").forEach(
        (el) => {
          el.replaceWith(document.getElementById('root'));
        }
      );
    }

    tabReplacer();

    return () => {};
  }, []);
  
  return (
    <ChakraProvider theme={customTheme} resetCSS={false}>
      <Button onClick={onOpen} id="get-a-quote-modal-trigger">GET A QUOTE</Button>
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
