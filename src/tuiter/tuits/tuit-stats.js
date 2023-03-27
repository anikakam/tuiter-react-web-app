import React from "react";

const TuitStats = (tuit) => {
    return (
        <div className="col-auto">
            <i className="bi bi-chat"></i>
            {tuit.replies}  <i className="bi bi-arrow-repeat"></i>
            {tuit.retuits}  <i className="bi bi-heart-fill text-danger"></i>
             {tuit.likes}
        </div>
    );
}
export default TuitStats;