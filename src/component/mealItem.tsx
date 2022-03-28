import * as React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

export interface IAppProps {
}

export interface IAppState {
}

export default class ealItem extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <CardGroup>
                    <Card>
                        <Card.Body className='card-body' >
                            <span className='float-right font-weight-bold'>$10</span>
                            <h6 className="text-truncate">Chocolate Martini</h6>
                            <p className="small">Tito's Vodka and White Créme de Cacao dusted with hand shaved chocolate.</p>                      </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className='card-body' >
                            <Card.Text>Test voor de card</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className='card-body' >
                            <Card.Text>Test voor de card</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className='card-body' >
                            <Card.Text>Test voor de card</Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}
