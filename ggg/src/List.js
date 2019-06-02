import React from 'react'
import ListItem from './listItem'

function List(props) {
    let listItems = props.Items.map((item, index)=>{
       return <ListItem Cur_Info = {item} key = {index}/>;
    });
    return(
        <ul>
            {listItems}
        </ul>
    );
}
        export default List;