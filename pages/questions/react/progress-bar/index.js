import classes from "../../../../styles/pages/questions/react/ProgressBar.module.scss";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarPage = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercentage((p) => p + 1);
    }, 100);
  }, []);
  return (
    <div className={classes.progress_bar_page}>
      <ProgressBar
        value={percentage}
        onComplete={() => alert("Completed!!!")}
      />
      <small>{percentage < 100 ? "Loading..." : "Loaded"} </small>
    </div>
  );
};
export default ProgressBarPage;
