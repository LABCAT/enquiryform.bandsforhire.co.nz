import React, { useEffect, useMemo, useState } from 'react';
import { Directus } from "@directus/sdk";
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
  const [artistID, setArtistID] = useState();
  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: null,
          lineHeight: null,
          color:  null,
          bg: null,
        }
      }
    }
  });

  const directus = useMemo(
    () => new Directus('https://dashboard.bandsforhire.co.nz'),
    []
  );

  useEffect(() => {
    const tabReplacer = () => {
      document.querySelectorAll("[href='#get-a-quote']").forEach(
        (el) => {
          el.replaceWith(document.getElementById('root'));
        }
      );
    }
    (async () => {
      await directus.items('artist').readByQuery({
        fields: ['*'],
        filter: {
          shopify_id: {
            _eq: props.shopifyID,
          },
        },
        limit: -1,
      }).then(
        (response) =>{
          const { data } = response;
          // there should only be one artist with the required Shopify ID
          if(data.length === 1) {
            const artist = data[0];
            setArtistID(artist.id);
            tabReplacer();
          }
        }
      );
    })();

    return () => {};
  });
  
  return (
    <ChakraProvider theme={customTheme} resetCSS={false}>
      { artistID && <Button onClick={onOpen} id="get-a-quote-modal-trigger">GET A QUOTE</Button> }
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>&nbsp;</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EnquiryForm artistID={artistID}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
