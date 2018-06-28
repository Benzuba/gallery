import React from 'react';
import NotFound from './NotFound';
import Pic from './Pic';


const List = props => {
  const results = props.data;
  let pics;
    if (results.length){
      pics = results.map(pic => <Pic url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id}/>);
    } else {
      pics = <NotFound />
    }
  return(
    <ul>
      {pics}
    </ul>
  )
}

export default List;
