import React, { useState } from 'react';
import FaqCard from './FaqCard';

const FaqData = () => {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const qusNAns = [

        {
            id: 3,
            question: 'The main features of this app?',
            answer: 'There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.'
        },
        {
            id: 4,
            question: 'The main features of this app?',
            answer: 'There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.'
        },
        {
            id: 1,
            question: 'How Many Participant can join at a time?',
            answer: 'Plugged in is multi dimentional meeting platform. Here more than 500 persons can join at a time. Our research and development team is working regularly and we hope that it will be increased in 1000 person.'
        },
        {
            id: 2,
            question: 'What is the pricing?',
            answer: 'At initial we are keep it free for 60 mins for once meeting where maximum 50 persons can join at a time. Up to 100 persons and time limit 2 hr it will be charged $9 per hour. Up to 1000 persons and time limit 5 hr it will be charged $19 per hour. Up to 1000 persons and time limit 12 hr it will be charged $99 per hour.'
        },
        {
            id: 3,
            question: 'The main features of this app?',
            answer: 'There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.'
        }
    ]

    return (
        <section className='bg-[#3d3db9] h-screen grid place-items-center'>
            <p className='text-5xl text-white font-bold'>Frequently Asked Questins</p>
            <div className='px-[40px] max-w-[800px]'>
                {
                    qusNAns.map((data, index) => {
                        return (
                            <FaqCard
                                key={data.id}
                                open={index === open}
                                question={data.question}
                                answer={data.answer}
                                toggle={() => toggle(index)}
                            ></FaqCard>
                        );
                    })
                }
            </div>

        </section>
    );
};

export default FaqData;