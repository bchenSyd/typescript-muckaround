
import * as React from 'react';
// in `flow`, it is called `impor type {IMapStateToprops} from 'react-redux';`
import { connect, MapStateToProps } from 'react-redux';
import { Component } from 'react';

interface IMyComponentProps {
    name: string;
    contact_methods: string[];
}

class MyComponent extends Component<IMyComponentProps, any> {
    render() {
        globalFunction1('bo');
        const { name } = this.props;
        if (true) {
            console.log('test'); //tslint error
        }
        //const {none_exists} = this.props  // typescript error
        return (
            <div>
                <div></div>
                <button onClick={() => { alert('go'); }} />
            </div>
        );
    }
}

const mapState2Props: MapStateToProps<any, any> = state=>{
    //console.log('typescript, produce an error!')
    return {};
}

export default connect()(MyComponent);