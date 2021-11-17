import React, { Component } from "react";
import FormGroup from "./form_comp";

export default class ContainerMain extends Component {
    render() {
        return (
            <div className="container">
                <div id="description">
                    <p id="description"><strong>
                        URL shortening is used to create shorter aliases for long URLs. We call these
                        shortened aliases “short links.” Users are redirected to the original URL when they hit
                        these short links.<br/>
                        For example, if we shorten this page through TinyURL:<br/>
                        <p id="longUrl">https://www.https://www.bestbuy.ca/en-ca/product/dji-mini-2-quadcopter
                        -drone-fly-more-combo-grey-bilingual/15081903?cmp=seo-15081903</p>
                        We would get:
                        <p id="tinyUrl">https://tinyurl.com/ydj2cd9g</p>
                    </strong>
                    </p>
                </div>
                <FormGroup />
            </div>
        )
    }
}