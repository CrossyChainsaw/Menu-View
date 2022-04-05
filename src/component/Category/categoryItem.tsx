import * as React from 'react';
import { Card } from 'react-bootstrap';
import './category.css'

export interface IAppProps {
    categoryName: any,
    categoryId: any,
}

export interface IAppState {
}

export default class CategoryItem extends React.Component<IAppProps, IAppState> {
    categoryId: React.Key | null | undefined;
    categoryName: any;
    constructor(props: any) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                {this.props.categoryName}
            </div>
        );
    }
}


