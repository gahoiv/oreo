import React from "react";
import ReactDOM from "react-dom";
import { HeaderInstance } from './component/header';
import { BodyInstance } from './component/body';
import { FooterInstance } from './component/footer';

ReactDOM.render(
    <div>
        <HeaderInstance/>
        <BodyInstance/>
        <FooterInstance/>
    </div>,
    document.getElementById("root"));