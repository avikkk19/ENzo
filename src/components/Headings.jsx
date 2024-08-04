import React from "react";
import TagLine from './Tagline'

const Headings = ({ className, title ,tag,text}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="mb-4 :justify-center">{tag}</TagLine>}
      {title && <h2 className="h1">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Headings;
