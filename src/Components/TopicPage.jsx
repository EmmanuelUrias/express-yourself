
function TopicPage () {
    let comments = ['I love dolphins', 'I hate dolphins']
    return (
        <div>
            <navbar>
                homepage----choosingPage
            </navbar>
            <img placeholder="Topic Image"/>
            <p>Full description</p>
            <form>
                <input placeholder="Leave a Comment"></input>
                <button>Submit</button>
            </form>
            {comments}
        </div>
    )
}

export default TopicPage