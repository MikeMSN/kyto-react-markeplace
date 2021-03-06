import React, {Component} from 'react'

import {searchPhone} from '../../actions'
import {connect} from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(({
            value: event.target.value
        }))
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.searchPhone(this.state.value)
    }

    render() {
        return(
            <div className='well blosd'>
                <h3 className='lead'>Quick shop</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            className='form-control'
                        />
                    </form>
                    <span className='input-group-btn'>
                        <button className='btn btn-defaul'>
                            <span className='glyphicon glyphicon-search'></span>
                        </button>
                    </span>
                </div>
            </div>
        )
    }



}

const mapDispatchToProps = {
    searchPhone
}
export default connect(null, mapDispatchToProps)(Search);