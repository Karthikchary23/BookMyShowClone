import React from "react";
const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-3">
        <div className="w-auto h-80 px-1 mx-auto place-content-center">
          <img
            className="w-64 h-full rounded-xl px-1"
            src={props.src}
            alt={props.title}
          />
        </div>

        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-grey-700"
          } pl-3`}
        >
          {props.title}
        </h3>

        <p
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-grey-700"
          } pl-3`}
        >
          {props.subTitle}
        </p>
      </div>
    </>
  );
};
export default Poster;
