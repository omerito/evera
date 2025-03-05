import React from "react";

interface TagButtonProps {
  text: string;
}

const TagButton: React.FC<TagButtonProps> = ({ text }) => {
  return (
    <button className="inline-flex items-center justify-center px-4 py-2 mb-3 mr-3 text-orange-500 duration-300 bg-orange-500 rounded-md bg-opacity-10 hover:bg-opacity-100 hover:text-white">
      {text}
    </button>
  );
};

export default TagButton;