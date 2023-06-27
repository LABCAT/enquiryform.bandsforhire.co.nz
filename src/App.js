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
    const tabReplacer = () => {
      document.querySelectorAll("[href='#get-a-quote']").forEach(
        (el) => {
          el.replaceWith(document.getElementById('root'));
        }
      );
    }

    window.addEventListener('DOMContentLoaded', tabReplacer);

    return () => {
      window.removeEventListener('DOMContentLoaded', tabReplacer);
    };
  }, []);
  
  return (
    <ChakraProvider theme={theme}>
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
