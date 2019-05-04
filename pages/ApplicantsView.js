export default ({users}) =>
    <div>
        <h3 align="center">Applicants</h3>
        <div className="container container-border">
            <div className="row">
                {users.map((item, index) =>
                    <div className="col card-padding">
                        <User userInfo={item} key={index}/>
                    </div>)
                }
            </div>
        </div>
    </div>