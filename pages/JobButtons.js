
import ApplicantsModal from './ApplicantsView'
import {JOB_SEEKER, RECRUITER} from '../Constants'

export default ({accountType}) =>
    <div className="card-body center-align-flex">
        {accountType === JOB_SEEKER ?
            <button type="button" className="btn btn-primary">Apply</button> : ( accountType === RECRUITER ?
            <button type="button" className="btn btn-primary">View Applicants</button> : null)
        }
    </div>