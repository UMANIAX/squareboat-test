import {Component} from 'react'
import Loader from './Loader'


export default class SignIn extends Component {

    state = {
        loading: false
    }

    submit = async e => {
        this.setState({loading: true})
    }


    signIn = () =>
        <div className="form-width form-border form-padding screen-center-vertical">
            <h4 align="center">Sign In</h4>
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"
                           placeholder="Enter email" required/>
                    <small className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" required/>
                </div>
                <div className="center-align-flex">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>


    render() {
        return (
            <div className="center-align-flex">
                {this.state.loading ? <Loader/> : this.signIn()}
            </div>
        )
    }
}