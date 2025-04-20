import { Link } from "react-router-dom"
import { FeedData } from "../../Components/Constant/feedData"
import { FaEllipsisH } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { BiSolidConversation } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";

const FeedCard = () => {
  return (
    <>
      {FeedData.map((feed) => (
        <div key={feed.id} className="w-full h-auto mb-6">
          <div className="w-ful h-auto flex  items-center justify-between mb-2">
            <div className="flex items-center gap-x-2 ">
              <Link to="/" className="flex items-center flex-col flex-shrink-0">
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <FaEllipsisH />
          </div>
          {/* feed img */}
          <div className="w-full lg:max-h-[70vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            <img
              src={feed.postImg}
              alt={feed.caption}
              className="w-full rounded object-cover"
            />
          </div>
          {/* user action (likes comment, share amd save) */}
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <CiHeart /> {/*likes */}
              <FaRegComment /> {/*comment*/}
              <TbLocationShare />
            </div>
            <BiSolidConversation />
          </div>
          {/* like count */}
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
          >
            <div className="flex items-center">
              <img
                src={feed.mutualFrndimg1}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-fill p-[1.5] bg-black"
              />
              <img
                src={feed.mutualFrndimg2}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-fill p-[1.5] bg-black"
              />
            </div>
            {feed.likeCount} like
          </Link>
          {/* Captions sesstion */}
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-white font-medium text-sm me-1">
                {feed.username}
              </Link>
              {feed.caption}
              <Link to="/" className="text-gray-400  text-sm me-1">
                more
              </Link>
            </div>
          </div>
          {/* Comment count */}
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm gray-200 font-thin">
              <Link to="/" className="text-gray-400 font-normal my-2">
                View all {feed.commentCount} comments
              </Link>
            </div>
          </div>
          {/* caption with username */}
          {/* <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-gray-400 font-normal my-2">
                View all {FeedData.commentCount}
              </Link>
            </div>
          </div> */}
          {/* comment */}
          <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
            <input
              type="text"
              className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3"
              placeholder="Add a comment...."
            />
            <BsEmojiSmile />
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedCard
