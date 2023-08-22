import { useRouter } from "next/router";
import PageWrapper from "@/src/components/PageWrapper";
import classes from "../styles/Home.module.scss";

const convertQuestionTitleToSlug = (questionTitle) => {
  return questionTitle.toLowerCase().replace(/\s+/g, "-");
};

const Home = () => {
  const questions = [
    {
      id: 1,
      title: "Progress Bar",
      category: "react",
      github: "",
      tags: ["react", "progress-bar"],
    },
    {
      id: 2,
      title: "Pagination",
      category: "react",
      github: "",
      tags: ["react", "pagination"],
    },
  ];

  const filteredQuestions=questions;

  const router = useRouter();

  const generateLink = (type, questionTitle) => {
    const slug = convertQuestionTitleToSlug(questionTitle);
    const link=`/questions/${type}/${slug}`;
    return link;
    //router.push(`/questions/${type}/${slug}`);
  };

  return (
    <PageWrapper>
      <div className={classes.home}>
        <div className={classes.heading}>
          <h1>Frontend Interview Questions</h1>
        </div>
        {/* <div className={classes.filters}>
          <div>
          <select>
            <option value="cat">Category</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="css">CSS</option>
          </select>
          <span>a</span>
          </div>
          <select>
            <option value="cat">Tags</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="css">CSS</option>
          </select> 
        </div> */}
        <div className={classes.question_table}>
          {filteredQuestions.map((question) => {
            return (
              <div className={classes.question}>
                <div>
                <p className={classes.title}>{question.title}</p>
                </div>
                <div>
                {/* <span onClick={() => navigateToQuestion(question.category, question.title)}>Live Demo</span> */}
                <a href={generateLink(question.category, question.title)} target="_blank">Live Demo</a>
                <a href={question.github} target="_blank">Source Code</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};
export default Home;
