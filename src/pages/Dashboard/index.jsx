import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersData } from "../../features/dashboard/chartSlice";
import style from "./assets/css/style.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const dispatch = useDispatch();
  const { loading, error, doughnutData } = useSelector((state) => state.charts);

  useEffect(() => {
    dispatch(fetchOrdersData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row gap-3 justify-content-between mb-4">
          <div className="col col-12 col-lg-5 p-0 ">
            {doughnutData && (
              <Doughnut className={style.chart} data={doughnutData} />
            )}
          </div>
          <div className="col col-12 col-lg-6 p-0">
            <h3 className={style.chart}>Coming soon</h3>
          </div>
        </div>

        <div className="row gap-3 justify-content-between mb-3">
          <div className="col col-12 col-lg-6 p-0 ">
            <h3 className={style.chart}>Coming soon</h3>
          </div>
          <div className="col col-12 col-lg-5 p-0">
            <h3 className={style.chart}>Coming soon</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
