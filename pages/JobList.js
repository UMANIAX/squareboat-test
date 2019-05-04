import Job from './Job'

export default ({jobs, accountType}) =>
    <div>
        <h3 align="center">Jobs</h3>
        <div className="container container-border">
            <div className="row">
                {jobs.map((item, index) =>
                    <div className="col card-padding">
                        <Job job={item} key={index} accountType={accountType}/>
                    </div>)
                }
            </div>
        </div>
    </div>