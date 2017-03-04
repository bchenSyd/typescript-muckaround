import * as React from 'react' //tslint error
import { Component } from 'react'; 

interface IMyComponentProps {
    name: string;
    contact_methods: string[]
}

class MyComponent extends Component<IMyComponentProps, any> {
    render() {
        const { name } = this.props
        if (true) {
            console.log('test') //tslint error
        }
        //const {none_exists} = this.props  // typescript error
        return (
            <div>
                <div></div>
                <button onClick={()=>{alert('go')}} />
            </div>
        );
    }
}

export default MyComponent;