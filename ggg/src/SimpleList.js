import React from  'react'

let arr = new Array(50).fill(100);

function SimpleList (){
    let listItems = arr.map((el)=>{
        return (
            <li>{el}</li>
        );
    });
    return <ul>{listItems}</ul>;
}
export default SimpleList;