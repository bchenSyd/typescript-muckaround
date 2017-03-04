import * as React from 'react'
import { Component } from 'react';

interface IMyComponentProps {
    name: string,
    contact_methods: string[]
}

class MyComponent extends Component<IMyComponentProps, any> {
    render() {
        const { name } = this.props
        //const {none_exists} = this.props  // typescript error
        return (
            <div>

            </div>
        );
    }
}

export default MyComponent;