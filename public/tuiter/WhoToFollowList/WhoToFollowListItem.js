const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-2">
        <img src=${who.avatarIcon} height="35px">
        </div>
        <div class="col">
        <p class="wd-title"><b>${who.userName}</b> <i class="fa fa-check-circle" aria-hidden="true"></i>
        </p>
        <p class="wd-topic">@${who.handle}</p>
        </div>
        <div class="col-3">
        <input class="btn btn-primary rounded-pill" type="button" value="Follow">
    </div>
    </div>
    </li>
    `);
}
export default WhoToFollowListItem;