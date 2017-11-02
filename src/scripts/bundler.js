import React from 'react';
import {render} from 'react-dom';
import Frame from './framer';
import Section_With_Image from './split-section';
import JDR_HEADER from './header';

import {data} from './data.js';
if (true) {
render(<Frame header="JrGiant Development">
    <Section_With_Image imgSrc={data['section-1'].imgSrc} imgAlt={data['section-1'].imgAlt} imgOn={data['section-1'].imgOn} >
    {data['section-1'].text}
    </Section_With_Image>
    <JDR_HEADER>Websites I have Built</JDR_HEADER>
    <Section_With_Image imgOn="left"/>
    <JDR_HEADER>Languages I have worked with</JDR_HEADER>
    <Section_With_Image />
    <JDR_HEADER>Code Review</JDR_HEADER>
    <Section_With_Image imgOn="left"/>
    <JDR_HEADER>Do you like what you see?</JDR_HEADER>
    <Section_With_Image>
        {"<p>I am available for hire in two different ways. First option is you can offer me a full time position with your company. Second option is hire me to build a website for you.</p>"}
    </Section_With_Image>
    </Frame>, 
    document.getElementById('content'));
}
require('../scss/style.scss');
