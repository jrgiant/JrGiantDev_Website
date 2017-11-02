import React from 'react';
import {render} from 'react-dom';
import JDR_HEADER from './header';
import Section_With_Image from './split-section';
import {data} from './data.js';
render(<JDR_HEADER>JrGiant Development</JDR_HEADER>, document.getElementById('content'));
//render(<Section_With_Image  />, document.getElementById('content'));
require('../scss/style.scss');
