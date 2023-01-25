import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const price = 150
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://server-assignment-11-seven.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            setSuccess('Congrats! your payment completed');
            setTransactionId(paymentIntent.id)
            // store payment info in the database
            // const payment = {
            //     price,
            //     transactionId: paymentIntent.id,
            //     email,
            //     bookingId: _id
            // }
            // fetch('http://localhost:5000/payments', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json',
            //     },
            //     body: JSON.stringify(payment)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         if (data.insertedId) {
            //             setSuccess('Congrats! your payment completed');
            //             setTransactionId(paymentIntent.id);
            //         }
            //     })
        }
        setProcessing(false);
    }
    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <CardElement
        //             options={{
        //                 style: {
        //                     base: {
        //                         fontSize: '16px',
        //                         color: '#424770',
        //                         '::placeholder': {
        //                             color: '#aab7c4',
        //                         },
        //                     },
        //                     invalid: {
        //                         color: '#9e2146',
        //                     },
        //                 },
        //             }}
        //         />
        //         <button
        //             className='btn btn-sm mt-4 btn-primary'
        //             type="submit"
        //             disabled={!stripe || !clientSecret || processing}>
        //             Pay
        //         </button>
        //     </form>
        // </div>
        <div className="w-full  mx-auto  ">
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="w-full  mx-auto  "
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <p className="text-red-500"></p>
                <button
                    className="text-white py-1 bg-[#BE123B] rounded font-semibold px-4 my-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Continue to Checkout
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;