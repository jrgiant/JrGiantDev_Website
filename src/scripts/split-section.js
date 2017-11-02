import React from 'react';
import styled from 'styled-components';
import SectionImg from './section-image';
import SectionText from './section-text';


const D = styled.div`
overflow:hidden;
position:relative;

>p {
    font-size:2rem;
}
`;


class Section_with_image extends React.Component{
    constructor(props){
        super(props);
        this.imgSrc = props.imgSrc || `http://via.placeholder.com/350x150`;
        this.imgAlt = props.imgAlt || ``;
        this.imgOn = props.imgOn || "right";
        //console.log("SectionWithIMage");
        //console.log(props)
       //console.log(`imgSrc:${this.imgSrc} imgAlt:${this.imgAlt} imgOn:${this.imgOn}`)
        
    }
    render(){
        return(
        <D className="container clearfix">
                <SectionImg imgOn={this.imgOn} imgSrc={this.imgSrc} imgAlt={this.imgAlt} />
                <SectionText imgOn={this.imgOn}>{this.props.children}</SectionText>
            
        </D>
        )
    }
}
export default Section_with_image;