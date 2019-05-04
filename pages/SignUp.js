import {Component} from 'react'
import {JOB_SEEKER, RECRUITER, SERVER_LINK} from '../Constants'
import Loader from "./Loader";
import axios from 'axios'

export default class SignUp extends Component {

    state = {
        loading: false,
        accountType: JOB_SEEKER
    }

    submit = async e => {

        e.preventDefault()

        let {_email, _password} = this.refs
        const email = _email.value
        const password = _password.value
        const jobType = this.state.accountType

        this.setState({...this.state, loading: true})
        await axios.post(SERVER_LINK + '/login', {email, password, jobType})
        // window.location = '/UserStore/' + _username
    }

    changeAccountType = e => this.setState({...this.state, accountType: e.target.value})

    signUp = () =>
        <div className="form-width form-border form-padding screen-center-vertical">
            <h4 align="center">Sign Up</h4>
            <h1>{this.state.accountType}</h1>
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"
                           placeholder="Enter email" ref="_email" required/>
                    <small className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" ref="_password" required/>
                </div>
                <div className="form-group form-radio" onChange={this.changeAccountType}>
                    <input type="radio" name="profile" className="form-radio-input" required
                           value={JOB_SEEKER}/> Job Seeker Profile<br/>
                    <input type="radio" name="profile" className="form-radio-input" required
                           value={RECRUITER}/> Recruiter Profile
                </div>
                <div className="center-align-flex">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    render() {
        return (
            <div className="center-align-flex">
                {this.state.loading ? <Loader/> : this.signUp()}
            </div>
        )
    }
}