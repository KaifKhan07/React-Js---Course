const RestaurantCard = (val) => {
    console.log(val);

    const { res } = val;
    const {name, cuisines,avgRating, costForTwo, sla, cloudinaryImageId} = res.info;
  
    console.log(res);
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" 
            src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                cloudinaryImageId}
                alt="res-logo"
            />
            
            {/* It just a same thing name written in 3 different ways */}

            {/* <h3>{res.info.name}</h3>
                <h3>{val.res.info.name}</h3>
                <h3>{name}</h3> */}

            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;