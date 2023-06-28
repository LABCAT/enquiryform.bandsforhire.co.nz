import { useMemo, useState, useEffect } from 'react';
import { Directus } from "@directus/sdk";
import { useForm, Controller } from 'react-hook-form';
import './enquiry-form.css';

import {
    Center,
    VStack,
    FormErrorMessage,
    FormLabel,
    FormControl,
    CheckboxGroup,
    Checkbox,
    Input,
    Textarea,
    Button,
    Alert,
    AlertIcon,
    Spinner 
} from '@chakra-ui/react'

export default function EnquiryForm(props) {
    const directus = useMemo(
        () => new Directus('https://dashboard.bandsforhire.co.nz'),
        []
    );
    const [loading, setLoading] = useState(true);
    const [performanceDurations, setPerformanceDurations] = useState([]);
    const [performanceOptions, setPerformanceOptions] = useState([]);
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(values) {
        const data = {
            name: values.name,
            email: values.email,
            phone_number: values.phoneNumber,
            function_type: values.functionType,
            location: values.location,
            venue_details: values.venueDetails,
            event_date: values.eventDate,
            performance_start_time: values.performanceStartTime,
            other_details: values.otherDetails,
            artist: props.artistID,
            event_durations: values.performanceDurations.map(
                (value) => { 
                    return {
                        performance_duration_id: value
                    }
                }
            ),
            event_options: values.performanceOptions.map(
                (value) => { 
                    return {
                        performance_option_id: value
                    }
                }
            ),
        }
        await directus.items('booking_enquiry').createOne(data).then(
            (enquiry) =>{
                setIsSuccessfullySubmitted(true);
            }
        );
        
    }

    useEffect(() => {
        let mounted = true;

        if(loading && mounted) {
            (
                async () => {
                    await directus.items('artist').readOne(
                        props.artistID,
                        { fields: ['*', '*.*.*'] }
                    )
                    .then((response) => {
                        setPerformanceOptions(
                            response?.performance_options.map(
                                (option) => { 
                                    return {
                                        id: option?.performance_option_id.id,
                                        title: option?.performance_option_id.title,
                                    }
                                }
                            )
                        );
                        setPerformanceDurations(
                            response?.performance_durations.map(
                                (option) => { 
                                    return {
                                        id: option?.performance_duration_id.id,
                                        title: option?.performance_duration_id.title,
                                    }
                                }
                            )
                        );
                        setLoading(false);
                    }).catch((error) => {
                        setLoading(false);
                    });
                }
            )();
        }

        return () => mounted = false; // cleanup function
    }, [directus, loading, props.artistID]);

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

                    {
                        loading 
                        ? <Center mb='15px'>
                            <Spinner 
                                thickness='4px'
                                speed='0.65s'
                                size='xl'
                            />
                        </Center>
                        : <>
                            {
                                performanceDurations.length &&
                                <FormControl isInvalid={errors.performanceDurations}>
                                    <FormLabel htmlFor='performanceDurations'>Performance Duration</FormLabel>
                                    <Controller
                                        name="performanceDurations"
                                        control={control}
                                        render={({ field: { ref, ...rest } }) => (
                                            <CheckboxGroup colorScheme='blue' {...rest}>
                                                <VStack spacing={[1, 5]} align="left">
                                                    {
                                                        performanceDurations.map(
                                                            (duration) => {
                                                                return (
                                                                    <Checkbox value={duration.id.toString()} key={duration.id}>{duration.title}</Checkbox>
                                                                )
                                                                
                                                            }
                                                        )
                                                    }
                                                </VStack>
                                            </CheckboxGroup>
                                        )}
                                        rules={{
                                            required: { value: true, message: "Please select at least one" }
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.performanceDurations && errors.performanceDurations.message}
                                    </FormErrorMessage>
                                </FormControl>
                            }
                            {
                                performanceOptions.length &&
                                <FormControl isInvalid={errors.performanceOptions}>
                                    <FormLabel htmlFor='performanceOptions'>Performance Options</FormLabel>
                                    <Controller
                                        name="performanceOptions"
                                        control={control}
                                        render={({ field: { ref, ...rest } }) => (
                                            <CheckboxGroup colorScheme='blue' {...rest}>
                                            <VStack spacing={[1, 5]} align="left">
                                                {
                                                    performanceOptions.map(
                                                        (option) => {
                                                            return (
                                                                <Checkbox value={option.id.toString()} key={option.id}>{option.title}</Checkbox>
                                                            )
                                                            
                                                        }
                                                    )
                                                }
                                            </VStack >
                                        </CheckboxGroup>
                                        )}
                                        rules={{
                                            required: { value: true, message: "Please select at least one" }
                                        }}
                                    />
                                    
                                    <FormErrorMessage>
                                        {errors.performanceOptions && errors.performanceOptions.message}
                                    </FormErrorMessage>
                                </FormControl>
}
                        </>
                    }

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
