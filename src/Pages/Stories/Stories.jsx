import React from 'react'
import { Link } from 'react-router-dom'
import { StoriesData } from '../../Components/Constant/StoriesData'
import TextEllipse from './TextEllipse/TextEllipse';

const Stories = () => {
  return (
    <div className="lg:max-w-[41vw] md:mx-w-[70vw]  sm:max-w-full max-w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
      <Link to="/" key={1} className="flex items-center flex-col flex-shrink-0">
        <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
          <img
            src="/images/foodTray.jpeg"
            alt="foodtray"
            className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
          />
        </div>
        <TextEllipse username="foodTray" />
      </Link>
      {StoriesData.map((story) => (
        <Link
          to="/"
          key={story.id}
          className="flex items-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
            <img
              src={story.image}
              alt="foodtray"
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            />
          </div>
          <TextEllipse username={story.useranme} maxlength={8}/>
        </Link>
      ))}
    </div>
  );
}

export default Stories
