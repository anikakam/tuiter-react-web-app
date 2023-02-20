const NavigationSidebar = () => {
    return(`
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fab fa-twitter" aria-hidden="true"></i></li>
            <li class="list-group-item"><i class="fa fa-home" aria-hidden="true"></i> Home</li>
            <li class="list-group-item active"><i class="fa fa-hashtag" aria-hidden="true"></i> Explore</li>
            <li class="list-group-item"><i class="fa fa-bell" aria-hidden="true"></i> Notifications</li>
            <li class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i> Messages</li>
            <li class="list-group-item"><i class="fa fa-bookmark" aria-hidden="true"></i> Bookmarks</li>
            <li class="list-group-item"><i class="fa fa-list-ul" aria-hidden="true"></i> Lists</li>
            <li class="list-group-item"><i class="fa fa-user" aria-hidden="true"></i> Profile</li>
            <li class="list-group-item"><i class="fa fa-ellipsis-h" aria-hidden="true"></i> More</li>
        </ul>
        <input class="btn btn-primary btn-block rounded-pill" type="button" value="Tweet">
    </div>
 `);
}
export default NavigationSidebar;