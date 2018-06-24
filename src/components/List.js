import React from 'react';
import Listitem from './Listitem';

const List = (props) => {
    return (
        <ul>
            {props.list.map(listitem => <Listitem item={listitem.task}/>)}
        </ul>
    )
}
 
export default List;