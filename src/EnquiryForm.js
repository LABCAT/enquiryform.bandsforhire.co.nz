import { useState } from 'react';
import { Directus } from "@directus/sdk";
import { useForm } from 'react-hook-form';
import './enquiry-form.css';

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Textarea,
    Button,
    Alert,
    AlertIcon,
} from '@chakra-ui/react'

export default function EnquiryForm(props) {
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(values) {
        console.log(values);
        const directus = new Directus('https://bandsforhire.mysite.digital');
        // const directus = new Directus('http://localhost:8055');
        const response = await directus.items('booking_enquiry').createOne({
            name: values.name,
            email: values.email,
            phone_number: values.phoneNumber,
            function_type: values.functionType,
            location: values.location,
            venue_details: values.venueDetails,
            event_date: values.eventDate,
            performance_start_time: values.performanceStartTime,
            performance_duration: values.performanceDuration,
            other_details: values.otherDetails,
            artist: props.artistID
        });
        setIsSuccessfullySubmitted(true);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='enquiry-form'>
            {
                isSuccessfullySubmitted ?
                <Alert status='success'>
                    <AlertIcon />
                    Your enquiry has been received.
                </Alert> :
                <>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input
                            id='name'
                            placeholder='Your name'
                            {...register('name', {
                                required: 'Please provide your name',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    
                    
                    <FormControl isInvalid={errors.email}>                  
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                            id='email'
                            type="email"
                            placeholder='Your email'
                            {...register('email', {
                                required: 'Please provide your email',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.phoneNumber}>
                        <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                        <Input
                            id='phoneNumber'
                            type="phone"
                            placeholder='Your phone number'
                            {...register('phoneNumber', {
                                required: 'Please provide your phone number',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.phoneNumber && errors.phoneNumber.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.functionType}>
                        <FormLabel htmlFor='functionType'>Function Type</FormLabel>
                        <Input
                            id='functionType'
                            placeholder='eg, christmas party, business event, wedding'
                            {...register('functionType', {
                                required: 'Please let us know the type of function you having',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.functionType && errors.functionType.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.location}>
                        <FormLabel htmlFor='location'>Location</FormLabel>
                        <Input
                            id='location'
                            placeholder='Location'
                            {...register('location', {
                                required: 'Please provide the location of your event.',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.location && errors.location.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.venueDetails}>
                        <FormLabel htmlFor='venueDetails'>Venue Details</FormLabel>
                        <Input
                            id='venueDetails'
                            placeholder='Name and address of the venue'
                            {...register('venueDetails', {
                                required: 'Please provide details about the venue of your function',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.venueDetails && errors.venueDetails.message}
                        </FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isInvalid={errors.eventDate}>
                        <FormLabel htmlFor='eventDate'>Event Date</FormLabel>
                        <Input
                            id='eventDate'
                            type="date"
                            {...register('eventDate', {
                                required: 'Please provide the date of your event',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.eventDate && errors.eventDate.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.performanceStartTime}>
                        <FormLabel htmlFor='performanceStartTime'>Performance Start Time</FormLabel>
                        <Input
                            id='performanceStartTime'
                            type="time"
                            {...register('performanceStartTime', {
                                required: 'What time do you want the performance to start?',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.performanceStartTime && errors.performanceStartTime.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.performanceDuration}>
                        <FormLabel htmlFor='performanceDuration'>Performance Duration</FormLabel>
                        <Input
                            placeholder='Length of the performance'
                            {...register('performanceDuration', {
                                required: 'Please provide details how long your would like the performance to be',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.performanceDuration && errors.performanceDuration.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl className="chakra-form-control--last">
                        <FormLabel htmlFor='otherDetails'>Other Details</FormLabel>
                        <Textarea
                            id='otherDetails'
                            placeholder='Any other details'
                            {...register('otherDetails', {})}
                        />
                    </FormControl>
                    <Button isLoading={isSubmitting} type='submit'>
                        Submit
                    </Button>
                </>
            }
        </form>
    )
}
