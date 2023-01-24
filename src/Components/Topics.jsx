
function Topics () {
    let numOfComments = 0

    return (
        <div style={{marginTop: '20px'}}>
            <header>
                Topics Title
            </header>
            <img placeholder="image"/>
            <p>short description</p>
            {numOfComments}
        </div>
    )
}

export default Topics