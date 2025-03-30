import React from 'react';
import { VscClose } from "react-icons/vsc";
const Tag = ({tagName,removeTagFromTagList}) => {
  return (
    <div className="px-2 mr-2 flex justify-between items-center align-middle text-center rounded-sm bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 text-black">
      {tagName}
      {<VscClose onClick={()=> removeTagFromTagList(tagName)} />}
    </div>
  );
};
export default Tag;
