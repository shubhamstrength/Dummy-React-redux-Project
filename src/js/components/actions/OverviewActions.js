export default {
    fetchData: function(dispatch){
        return fetchGraphData(dispatch);
    },
    fetchCampaignData: function(dispatch){
        return fetchCampaignData(dispatch);
    },
    createData: function(dispatch, data){
        return createCampaignData(dispatch, data);
    }
}

async function fetchGraphData(dispatch){
    return fetch("http://5c3db915a9d04f0014a98a79.mockapi.io/overview")
        .then(response => response.json())
        .then((data) => {
            return dispatch({
                type: 'FETCH_DATA',
                data
            })
        })
        .catch(e => console.log(e))
}

async function fetchCampaignData(dispatch){
    return fetch("http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns")
        .then(response => response.json())
        .then((data) => {
            return dispatch({
                type: 'FETCH_CAMPAIGN_DATA',
                data
            })
        })
        .catch(e => console.log(e))
}

function createCampaignData(dispatch, data){
    return dispatch({
        type: 'CREATE_CAMPAIGN_DATA',
        data
    })
}