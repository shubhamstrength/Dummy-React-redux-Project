import { connect } from 'react-redux';
import '../../css/CreateCampaign.css';
import OverviewActions from './actions/OverviewActions';

function CreateCampaign(props: any) {

  const addEntryToCampaignList = (event: any) =>{
    event.preventDefault();
    props.setCampapigneData(event.target.elements.campaignName.value)
  }

  return (
      <div className='main-page'>
        <form onSubmit={addEntryToCampaignList}>
          <label>Name:</label>
          <input 
            placeholder='Enter campaign name'
            name='campaignName' 
            type='text'
          />
        <input 
          type='submit' 
          value='Submit' 
      />
        </form>
      </div>
  );
}

const mapDispatchToProps = (dispatch :any) => {
  return {
    setCampapigneData: (campaign: any) => dispatch(OverviewActions.createData(dispatch,campaign)),
  }
};

export default connect(null, mapDispatchToProps)(CreateCampaign);
