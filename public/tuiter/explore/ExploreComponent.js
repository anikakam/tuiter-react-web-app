import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="col">
        <div class="wd-area">
            <input type="search" class="wd-search-bar" placeholder="Search Tuiter">
            <a href="explore-settings.html"><i class="fa fa-cog" aria-hidden="true"></i></a>
        </div>
        <div class="card border-0">
            <div class="card-header">
                <div class="nav nav-tabs card-header-tabs">
                    <a class="nav-link active" href="for-you.html">For You</a>
                    <a class="nav-link" href="trending.html">Trending</a>
                    <a class="nav-link" href="news.html">News</a>
                    <a class="nav-link" href="sports.html">Sports</a>
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </div>
            </div>
            <div class="card-body">
                <div class="position-relative">
                    <img src="spacex.jpg" class="img-fluid">
                    <div class="card-img-overlay text-white">
                        <h5 class="card-title">SpaceX's Starship</h5>
                    </div>
                </div>
           ${PostSummaryList()}
           </div>
           </div>
           </div>
    `);
}
export default ExploreComponent;
