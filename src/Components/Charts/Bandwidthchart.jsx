
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  
  const Bandwidthchart = (props) => {
  
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Bandwidth',
        },
      },
    };
  
  
  
    return (<Line style={{ marginTop: "8px" }} options={options} data={props.data} />);
  }
  
  export default Bandwidthchart;