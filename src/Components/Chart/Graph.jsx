import { Line } from "react-chartjs-2";
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
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph(props) {
  const years = [];
  const field_fissures = [];
  const lipid_content = [];
  const protein_content = [];

  props.data.map((details) => {
    years.push(details.year);
    field_fissures.push(details.field_fissures);
    lipid_content.push(details.lipid_content);
    protein_content.push(details.protein_content);
  })
  const data = {
    labels: years,
    datasets: [
      {
        label: "field fissures",
        data: field_fissures,
        borderColor: "rgba(0,0,255,1)",
        backgroundColor: "rgba(0,0,255,0.4)",
      },
      {
        label: "lipid content",
        data: lipid_content,
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(255,0,0,0.4)",
      },
      {
        label: "protein content",
        data: protein_content,
        borderColor: "rgba(0,255,0,1)",
        backgroundColor: "rgba(0,255,0,0.4)",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Line
          options={{
            responsive: true,
          }}
          data={data}
        />
      </div>
      <div className="mb-8">
        <p className="text-lg mb-4 roboto-medium">
          Understanding Grain Quality Trends:
        </p>
        <ul style={{ "list-style-type": "disc" }}>
          <li>
            <p className="text-base mb-4">
              Grain quality metrics like field fissures, protein content, and
              lipid content are crucial for assessing nutritional value, storage
              stability, and processing suitability of grains.
            </p>
          </li>
          <li>
            <p className="text-base">
              Analyze trends across cultivars and years to optimize postharvest
              management and maximize value throughout the supply chain.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Graph;

