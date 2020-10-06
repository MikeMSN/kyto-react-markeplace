import React from 'react'
import {connect} from 'react-redux'
import {fetchPhoneById} from "../../actions";
import {getPhoneById} from "../../selectors";
import * as R from 'ramda';

class Phone extends React.Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id)
    }

    render() {
        const {phone} = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {phone && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {phone && this.renderSideBar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderContent() {
        const {phone} = this.props;

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-thumbnail'
                             src={phone.image}
                             alt={phone.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4 >${phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderSideBar() {
        return (
            <div>Sidebar</div>
        )
    }

    renderFields() {
        const {phone} = this.props

        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone)

        return columnFields.map(([key, value]) => (
            <div className='column'>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    {value}
                </div>
            </div>
        ))
    }
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
}
const mapDispatchToProps = {
    fetchPhoneById
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)