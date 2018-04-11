/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/store/selectors'
import { uPortGetCredentialsRequest } from 'assimilation/store/actions'
import UPortIdentityCard from 'assimilation/components/uport/UPortIdentityCard'
/* ---------------------------- Module Package ------------------------------ */

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: ['name', 'email', 'phone', 'avatar'],
      notifications: true
    },
    metadata: {
      delta: 'credentials',
      dialog: 'ViewDialogWelcome'
    }
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(UPortIdentityCard);