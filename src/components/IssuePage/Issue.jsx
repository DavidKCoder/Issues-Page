import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getIssue } from '../../redux/issueReducer/thunk'
import { connect } from 'react-redux'

const Issue = ({issue, getIssue}) => {
    const params = useParams()
    useEffect(() => {
       const id = params.id
        getIssue(id)
    }, [issue])
    return (
        <div>
            <h2>{issue.text}</h2>
            <p>{issue.description}</p>
        </div>
    )
}
const mapStateToProps = (state) => ({
    issue: state.issue.issue
})
export default connect(mapStateToProps, {getIssue})(Issue)
