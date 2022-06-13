import { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

interface IProps {
    onHide(): void,
    show: boolean
}

export default function PayingMethods(props: IProps) {
    const [tableID] = useState(0);

    function displayEuros(cents: Number) {
        return "€" + cents.toString().slice(0, -2) + "," + cents.toString().slice(-2)
    }

    return (
        <Modal
            onHide={props.onHide}
            show={props.show}
            centered
            keyboard={true}
            size="lg"
        >

            <Modal.Header closeButton>
                <Modal.Title>
                    Bestelling voor tafel {tableID}
                </Modal.Title>
            </Modal.Header>

            <ModalBody>
                <section>
                    <h6 className="mb-0 text-muted">{displayEuros(100)}</h6>
                    <div className="card-body p-0">

                        {/* const PayPalButton = paypal.Buttons.driver("react", {React, ReactDOM}); */}
                        <CheckoutForm></CheckoutForm>
                    </div>
                </section >
            </ModalBody >
        </Modal >
    );
}