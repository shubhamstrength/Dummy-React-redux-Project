import '../../css/ApiHeader.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ChartOverview = (props: { data: object[] | undefined})=>
{
    const renderLineChart = (
        <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
        </LineChart>
      );
  return (
    renderLineChart
  );
}

export default ChartOverview;
