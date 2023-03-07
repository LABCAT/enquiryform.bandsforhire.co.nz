import React from 'react';
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

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <ChakraProvider theme={theme}>
      <Button onClick={onOpen}>GET A QUOTE</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>For a free quote fill in the form below</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EnquiryForm/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
