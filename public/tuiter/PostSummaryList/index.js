import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
           <div class="card">
           <ul class="list-group list-group-flush">
             ${
        posts.map(posts => {
            return (PostSummaryItem(posts));
        }).join('')
    }
        </ul>
        </div>
            `);
}
export default PostSummaryList;