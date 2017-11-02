import React from 'react';

export class Section_with_image extends React.Component{
    constructor(){
        super();
        this.imgSrc = this.props.imgSrc || `http://via.placeholder.com/350x150`;
        this.imgAlt = this.props.imgAlt || ``;
        this.imgOn = this.props.imgOn || "right";
        this.text = this.props.text || "<p>Spicy jalapeno bacon ipsum dolor amet duis ex prosciutto porchetta aliqua lorem cupim shankle dolor sint. Pariatur fatback turkey, frankfurter pork chop fugiat dolor duis ea qui pig sed ham laboris ipsum. Spare ribs brisket pork loin in sausage meatball, fugiat pig nulla ut biltong cupim. Jerky fugiat ham occaecat mollit, commodo proident ut. In picanha cupim, quis pastrami aute tongue voluptate sed. Id in dolore deserunt magna.</p><p>Kevin pork belly id flank aute, shankle magna culpa est consequat et in officia. Veniam id ex voluptate qui, swine cow burgdoggen in cillum fatback sint ham hock. Laboris sunt dolor ad sint tempor burgdoggen chicken irure. Spare ribs qui eiusmod bresaola aliqua meatloaf ham est elit laboris. Pork chop adipisicing irure et velit nisi swine shank aliqua, pancetta do fatback fugiat.</p>"
    }
    render(){
        return(
        <div className="container clearfix">
            <div className="Section_img">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
            </div>
            <div className="Section_text" style={{float:`${this.props.imgOn}`}}>
            {this.props.children}
            </div>
        </div>
        )
    }
}
