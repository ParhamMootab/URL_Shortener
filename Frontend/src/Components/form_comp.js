import React, { Component } from "react";
import axios from "axios";

export default class FormGroup extends Component {


    copyToClipboard(e) {
        var copyTextarea = document.querySelector('input#shortUrl');
        copyTextarea.focus();

        try {
            navigator.clipboard.writeText(copyTextarea.value);
        } catch (err) {
            console.log('Oops, unable to copy');
        }

    }

    onSubmit(e){
        e.preventDefault()

        let enteredUrl = document.querySelector("input#longUrl")
        axios.post("http://localhost:5000/shorten", {longUrl: enteredUrl.value})
            .then(
            (res) =>{
                document.querySelector("input#shortUrl").value = res.data.shortUrl
            }
        ).catch((err) => console.log(err))
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Long Url</span>
                    <input type="text" id="longUrl" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" id="submitBtn">Get Short URL</button>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Short Url</span>
                    <input type="text" className="form-control" id="shortUrl" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" readOnly>
                    </input>
                    <button type="button" id="cp" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard" onClick={this.copyToClipboard} >
                        Copy</button>
                </div>
            </form>
        )
    }
}