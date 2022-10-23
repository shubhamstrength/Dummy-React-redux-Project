import './App.css';
import ApiHeader from './js/components/ApiHeader';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Overview from './js/components/Overview';
import Campaigns from './js/components/Campaigns';
import CreateCampaign from './js/components/CreateCampaign';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OverviewActions from './js/components/actions/OverviewActions';

const App = (props: { fetchData: () => void}) => {

  useEffect(()=>{
    props.fetchData()
  },[])

  return (
    <Router>
      <div className="App">
        <ApiHeader></ApiHeader>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/campaign" element={<Campaigns />} />  
          <Route path="/create" element={<CreateCampaign/>} />  
        </Routes>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(OverviewActions.fetchData),
  }
};

export default connect(null, mapDispatchToProps)(App);
