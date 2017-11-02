import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import styled from 'styled-components';
import {parallelPolygon} from './styleHelpers'
class SectionText extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.text = props.children || "<p>Spicy jalapeno bacon ipsum dolor amet duis ex prosciutto porchetta aliqua lorem cupim shankle dolor sint. Pariatur fatback turkey, frankfurter pork chop fugiat dolor duis ea qui pig sed ham laboris ipsum. Spare ribs brisket pork loin in sausage meatball, fugiat pig nulla ut biltong cupim. Jerky fugiat ham occaecat mollit, commodo proident ut. In picanha cupim, quis pastrami aute tongue voluptate sed. Id in dolore deserunt magna.</p><p>Kevin pork belly id flank aute, shankle magna culpa est consequat et in officia. Veniam id ex voluptate qui, swine cow burgdoggen in cillum fatback sint ham hock. Laboris sunt dolor ad sint tempor burgdoggen chicken irure. Spare ribs qui eiusmod bresaola aliqua meatloaf ham est elit laboris. Pork chop adipisicing irure et velit nisi swine shank aliqua, pancetta do fatback fugiat.</p>";
        console.log(this.text);
    }
    render(){
        return(
            <St imgOn={this.props.imgOn}><div>{ReactHtmlParser(this.text)}</div></St>
        )
    }
}




const St = styled.div.attrs({
    imgon: (props)=>props.imgOn
})`
width:50%;
padding:5%;
height:100%;
background-color:${(props) =>props.backgroundColor || "#d7cec7"};
text-align:justify;
${(props) => props.imgOn == "left" ? "float:left;" + parallelPolygon("topLeftX", "20%") : "float:right;" + parallelPolygon("topRightX", "80%")};
> div {
    width:80%;
    margin-${(props) => props.imgOn == "left" ? "left":"right"}:20%;
}
`
export default SectionText;
