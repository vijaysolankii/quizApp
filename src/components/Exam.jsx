import React from "react";
import exam from "../json/quiz";

function Exam() {
  return (
    <div className="quiz-container">
      All data will show
      {exam.map((key, data) => {
        return (
          <>
            <div key={key}>
              {/* <div>{data.exam_Id}</div>
              <div>{data.exam_name}</div>
              <div>{data.exam_time}</div>
              <div>{data.exam_exam_total_question}</div> */}
              {data.exam_Id + " , " + data.exam_name + " ," + data.exam_time + ", " + data.exam_total_question}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Exam;
