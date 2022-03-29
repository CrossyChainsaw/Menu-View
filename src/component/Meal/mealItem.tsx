import * as React from 'react';
import { Card } from 'react-bootstrap';

export interface IAppProps {
    mealId: any,
    name: any,
    price: any

}

export interface IAppState {
}

export default class MealItem extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <Card>
                <Card.Body className='card-body' >
                    <span className='float-right font-weight-bold'>{this.props.price}</span>
                    <h6 className="text-truncate">{this.props.name}</h6>
                    <p className="small">Tito's Vodka and White Créme de Cacao dusted with hand shaved chocolate.</p></Card.Body>
            </Card>
        );
    }
}
