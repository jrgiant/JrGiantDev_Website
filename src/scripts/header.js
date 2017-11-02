import styled, {css} from 'styled-components';
import React from 'react';
import {parallelPolygon, mediaQueries} from './styleHelpers';
const h1Sizes = [
    `font-size: 1rem; margin-top: 25px;`, 
    `font-size: 2rem; margin-top: 30px;`, 
    `font-size: 3.5rem; margin-top: 15px;`, 
    `font-size: 4rem;`, 
    `font-size: 5rem;`
]
const _HEADER = styled.div`
    background-color:${(props)=>props.backgroundColor || '#565656'};
    color:#fff;
    text-align:center;
    padding-top:2%;
    height: 200px;
    ${mediaQueries('height:110px', 'height:160px',null, 'height:200px')};
    
    > h1 {
        font-family:'Shadows Into Light', cursive;
        font-size:5rem;
        margin-top:0;
        ${mediaQueries(...[
        `font-size: 1rem; margin-top: 25px;`,
        `font-size: 2rem; margin-top: 30px;`,
        `font-size: 3.5rem; margin-top: 15px;`,
        `font-size: 4rem;`,
        `font-size: 5rem;`
        ])}
    }
`;

class JDR_HEADER extends React.Component{
    constructor(props){
        super(props);
        this.text = "Place Holder Text";
        this.props = props;
    }
    render(){
        return(
            <_HEADER isTop={this.props.isTop}><h1>{this.props.children || this.text}</h1></_HEADER>
        )
    }
}
export default JDR_HEADER;