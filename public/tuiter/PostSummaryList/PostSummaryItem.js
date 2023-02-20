const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
                        <div class="row">
                            <div class="col">
                                <p class="wd-topic">${post.topic}</p>
                                <p class="wd-title"><b>${post.userName}</b> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    - ${post.time}
                                </p>
                                <p class="wd-topic"><b>${post.title}</b></p>
                                <p class="wd-topic">${post.tweets}</p>
                            </div>
                            <div class="col-2">
                                <img src=${post.image} height="75px" width="75px" class="rounded">
                            </div>
                        </div>
        </li>
    `);
}
export default PostSummaryItem;