import React from 'react'

class TextBox extends React.Component{

    OnChangeTextBox = (evt) => {
        console.log(evt.target.value);
    };


    render() {

        return (<input type = 'textarea' onChange={(evt)=>{this.OnChangeTextBox(evt)}}/>);
    }
}
export default TextBox;