import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (tuit) => {
    const dispatch = useDispatch();
    return (
        <div>
            <i className="bi bi-chat"></i>
            {tuit.replies} <i className="bi bi-arrow-repeat"></i>
            {tuit.retuits}
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
            }))} className="bi bi-heart-fill me-2 text-danger"></i>
            {tuit.likes}
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1
            }))} className="bi bi-hand-thumbs-down-fill"></i>
        </div>
    );
}
export default TuitStats;