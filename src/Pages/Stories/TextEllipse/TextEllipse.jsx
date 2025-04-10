import React from 'react'

const TextEllipse = ({username, maxlength = 8}) => {
const usernameEllipseStory = username.length > maxlength ? `${username.slice(0, maxlength)}...` : username;

  return (
    <>
      <p className="text-white text-sm mt-1 truncate">{usernameEllipseStory}</p>
    </>
  );
}

export default TextEllipse
