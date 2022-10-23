const OverviewReducer = function (state = {installData:[], revenueData:[], campaignDataDropdown:[], campaignData:[]}, action) {
    switch (action.type) {
      case "FETCH_DATA":   
        return {...state, installData: action.data.installs, revenueData: action.data.revenue};
      
      case "FETCH_CAMPAIGN_DATA": 
      const dropdownArr =[] 
      action.data.forEach(element => {
        dropdownArr.push(element.name)
      });
      const newData = [...state.campaignDataDropdown, ...dropdownArr]
      const uniq = [...new Set(newData)];
      return {...state, campaignData: action.data, campaignDataDropdown: uniq};

      case "CREATE_CAMPAIGN_DATA":
      const newCreateData = state.campaignDataDropdown
      newCreateData.push(action.data)
      const uniqCreate = [...new Set(newCreateData)];
      return {...state, campaignDataDropdown: uniqCreate};

      default:
        return state;
    }
};

export default OverviewReducer