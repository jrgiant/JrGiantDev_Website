import styled from 'styled-components';
import React from 'react';
const SectionImgDiv = styled.div`
width:30%;
background-color: ${(props) =>props.backgroundColor || "#fff"};
position:relative;
overflow:hidden;
text-align:center;
padding:5%;
height:100%;
vertical-align:center;
`;
const SImg = styled.img.attrs({
    src: (props) => props.imgSrc || "http://via.placeholder.com/350x150",
    alt: (props) => props.imgAlt || ''
})`
width:90%;
`;


class SectionImg extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount(){

    }

    render(){
        return(
        <SectionImgDiv style={{float:this.props.imgOn || "right"}}>
            <SImg imgSrc={this.props.imgSrc} imgAlt={this.props.imgAlt}/>
        </SectionImgDiv>
        )
    }
}
export default SectionImg;