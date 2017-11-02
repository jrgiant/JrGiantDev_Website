import React from 'react';
import JDR_HEADER from './header';


class Frame extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div>
                <JDR_HEADER isTop="true">{this.props.header || "placeholder Text"}</JDR_HEADER>
                {this.props.children}
            </div>
        )
    }
}
export default Frame;   