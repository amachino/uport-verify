/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { Button } from 'atomic'
import { 
  firestoreDocumentDeleteRequest
} from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {

  }
})


const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentDeleteRequest: ()=>dispatch(firestoreDocumentDeleteRequest({
    metadata: {
      branch: [
        props.collection,
        props.id
      ],
    }
  })),
})


const FirestoreDeleteButton = props => <Button onClick={props.firestoreDocumentDeleteRequest} {...props}/>

export default compose(
  connect(null, mapDispatchToProps),
  queryLifecycle,
)(FirestoreDeleteButton);
