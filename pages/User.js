
export default ({userInfo}) => {

    const {username, accountType, userImage} = userInfo

    return (
        <div className="card card-width">
            <img src={userImage} className="card-img-top card-img-width"/>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{username}</h5>
                <p className="card-text font-weight-lighter">{accountType}</p>
                <button type="button" className="btn btn-primary">Logout</button>
            </div>
        </div>
    )
}