import { connect } from 'react-redux';
import '../../css/Overview.css';
import ChartOverview from './ChartOverview';


const Overview = (props:any)=>
{
  return (
      <div className={'main-page'}>
        <div className={'graph-overview'}>
          <div>
            <span>Installs</span>
            <ChartOverview data={props.installData}></ChartOverview>
          </div>
          <div>
            <span>Revenue</span>
            <ChartOverview data={props.revenueData}></ChartOverview>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    installData: state.overview.installData,
    revenueData: state.overview.revenueData
  };
};

export default connect(mapStateToProps,null)(Overview);
