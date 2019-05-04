
import JobButtons from './JobButtons'

export default ({job, accountType}) => {

    const {img, ctc, location, min_exp, cos, desc} = job

    return (
        <div className="card card-width">
            <img src={img} className="card-img-top card-img-width" alt="Job-Card"/>
            <div className="card-body">
                <h5 className="card-title">{cos}</h5>
                <p className="card-text">{desc}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Location: {location}</li>
                <li className="list-group-item">Minimum Experience: {min_exp} Years</li>
                <li className="list-group-item">Annual CTC: {ctc} LPA</li>
            </ul>
            <JobButtons accountType={accountType}/>
        </div>
    )
}