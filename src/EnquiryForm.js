import { useState } from 'react';
import { Directus } from "@directus/sdk";
import { useForm } from 'react-hook-form';

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Alert,
    AlertIcon
} from '@chakra-ui/react'

export default function EnquiryForm() {
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(values) {
        const directus = new Directus('https://bandsforhire.mysite.digital');
        const response = await directus.items('booking_enquiry').createOne({
            name: values.name,
        });
        setIsSuccessfullySubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                isSuccessfullySubmitted ? 
                <Alert status='success'>
                    <AlertIcon />
                    Your enquiry has been received.
                </Alert> :
                <>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor='name'>First name</FormLabel>
                        <Input
                            id='name'
                            placeholder='name'
                            {...register('name', {
                                required: 'This is required',
                                minLength: { value: 4, message: 'Minimum length should be 4' },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button isLoading={isSubmitting} type='submit'>
                        Submit
                    </Button>
                </>
            }
        </form>
    )
}