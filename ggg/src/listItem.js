import React from 'react'


function ListItem(props){
       return(

            <li>
                <input type = 'checkbox'/>
                <div>{props.Cur_Info.Cur_Code}</div>
                <div>{props.Cur_Info.Cur_Name}</div>
                <div>{props.Cur_Info.Cur_DateEnd}</div>
            </li>

        );
    }
    export default ListItem;