import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../css/ApiHeader.css';
import OverviewActions from './actions/OverviewActions';
import ChartOverview from './ChartOverview';

function Campaigns(props:any) {

  const [campaignChartData, setCampaignChartData] = useState([])

  useEffect(()=>{
    props.fetchCampapigneData();
  },[])

  useEffect(()=>{
    if (props.campaignData.length > 0 && campaignChartData.length === 0) {
      setCampaignChartData(props.campaignData[0].installs)
    }
  },[props.campaignData])

  const changeDropdown = (event: any)=> {  
   const updatedData = props.campaignData.filter((data: any)=>{ return data.name === event.target.value})
      // since new values have no data so setting them to the initial data
      if(updatedData.length < 0){
        setCampaignChartData(campaignChartData);
      }
      else{
        setCampaignChartData(updatedData[0].installs);
      }
  }
  
  return (
      <div className='main-page'>
          <select name="campaign" id="campaign" onChange={changeDropdown}>
            {props.options.length && props.options.map((val: any)=>{
              return  <option key={val} value={val}>{val}</option>
            })}
          </select>
          <ChartOverview data={campaignChartData}></ChartOverview>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    options: state.overview.campaignDataDropdown,
    campaignData: state.overview.campaignData
  };
};

const mapDispatchToProps = (dispatch :any) => {
  return {
    fetchCampapigneData: () => dispatch(OverviewActions.fetchCampaignData),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
