import classes from "../../styles/components/PageWrapper.module.scss";
const PageWrapper = ({ children }) => {
  return (
    <div className={classes.page_wrapper}>
      <div className={classes.main_content}>{children}</div>
    </div>
  );
};
export default PageWrapper;
