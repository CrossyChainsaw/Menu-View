import React from 'react';
import { Category } from '../../interfaces/Category';
import './category.css'

export default class CategoryItem extends React.Component<Category> {
    public render() {
        return (
            <div>
                <h1 className='center-text'>
                    {this.props.name}
                </h1>
            </div>
        );
    }
}


