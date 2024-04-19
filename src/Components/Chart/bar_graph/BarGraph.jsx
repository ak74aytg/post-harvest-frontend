import { Bar } from "react-chartjs-2";
import { BarElement } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
    BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph(props) {

    const x_axis = props.x_axis.map((item)=>item.id);
    const y_axis = props.y_axis;
  
  
  const data = {
    labels: x_axis,
    datasets: [
      {
        label: props.name,
        data: y_axis,
        borderColor: props.borderColor,
        backgroundColor: props.bgColor,
      },
    ],
  };

  return (
    <div className="px-5">
      <div>
        <Bar
          data={data}
          options={{
            responsive: true,
          }}
        />
      </div>
    </div>
  );
}

export default BarGraph;
