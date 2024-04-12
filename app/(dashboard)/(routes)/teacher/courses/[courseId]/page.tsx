import React from "react";

const Singlecourse = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  return <div>{params.courseId}</div>;
};

export default Singlecourse;
