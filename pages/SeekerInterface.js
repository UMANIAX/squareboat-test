import User from './User'
import JobList from './JobList'

const dummy_job = {

    cos: 'Adobe',
    img: "https://pbs.twimg.com/profile_images/898670702173147136/pToNfHs6_400x400.jpg",
    ctc: 20,
    location: "Gurugram, Haryana",
    min_exp: 4,
    desc: "Software Developer"
}

const dummy_user = {
    username: 'Umang',
    accountType: 'Job Seeker',
    userImage: 'https://pbs.twimg.com/profile_images/898670702173147136/pToNfHs6_400x400.jpg'
}

export default () =>
    <div className="container-fluid">
        <div className="row">
            <div className="col col-lg-2 base-padding">
                <User userInfo={dummy_user}/>
            </div>
            <div className="col col-lg-10 base-padding">
                <JobList accountType={dummy_user.accountType} jobs={[dummy_job, dummy_job, dummy_job, dummy_job, dummy_job, dummy_job, dummy_job]}/>
            </div>
        </div>
    </div>
