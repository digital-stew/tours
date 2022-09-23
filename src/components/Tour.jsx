import { useState } from "react";

function Tour({id, name, info, image, price, removeTour}) {
  const [readMore, setReadMore]= useState(false)
  return (
    <>
      <div className="tour">
        <img src={image} alt={name} />
        
          <div className="tour-title">
            <p>{name}</p> <p>£{price}</p>
          </div>
          <div className="tour-info">{readMore?info:`${info.substring(0,200)}...`}
          {/* if (readmore) {render "less"}else{render"Read more"} */}
          <p className="more-btn" onClick={()=> setReadMore(!readMore) }> {readMore?' less': 'Read more'} </p> 
          </div>
          <button className="btn" onClick={()=>removeTour(id)}>Not interested</button>
        
      </div>
    </>
  );
}

export default Tour;
