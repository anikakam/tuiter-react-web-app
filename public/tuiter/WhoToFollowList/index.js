import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <div class="card">
           <ul class="list-group list-group-flush">
           <li class="list-group-item"><p class="wd-title"><b>Who to follow</b></p></li>
             ${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
        </ul>
        </div>
            `);
}
export default WhoToFollowList;
