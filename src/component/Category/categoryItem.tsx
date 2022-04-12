import * as React from 'react';
import { Card } from 'react-bootstrap';
import './category.css'

export interface IAppProps {
    categoryId: any,
    categoryName: any,
}

export interface IAppState {}

export default class CategoryItem extends React.Component<IAppProps, IAppState> {
    categoryId: React.Key | null | undefined;
    categoryName: any;
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    public render() {
        return (
            <div>
                <hr></hr>
                <h1 className='center-text'>
                    {this.props.categoryName}
                </h1>
            </div>
        );
    }
}


