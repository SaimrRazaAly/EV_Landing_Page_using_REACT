import arrow_Btn from "../asserts/arrow_btn.png";
import play_icon from "../asserts/play_icon.png";
import pause_icon from "../asserts/pause_icon.png";
const Hero = ({
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
  heroData,
}) => {
  return (
    <div className="mt-[30px] res-600:my-0 res-600:mt-[30px] res-600:mx-[120px] overflow-hidden">
      <div className="text-white   text-[50px] res-69:text-[70px] res-69:leading-none res-70:text-[80px] res-69:text-left  text-center  ">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="bg-white rounded-full  py-1 px-4 mt-[10px] res-69:mt-[30px] flex justify-between items-center res-1280:w-[30%] res-1000:w-[45%] res-70:w-[50%]relative res-69:m-0  m-auto w-[80%]">
        <p>Explore the features</p>
        <img src={arrow_Btn} alt=""  className="-mr-3 res-70:w-auto w-[50px]" />
      </div>
      <div className=" flex mt-[100px]  justify-center gap-[100px] res-70:mt-5 res-1000:mt-0 res-69:justify-between items-center  res-70:px-10  w-full  ">
        <ul className="flex  ">
          <li
            onClick={() => setHeroCount(0)}
            className={`mini-btns ${heroCount === 0 ? "bg-orange-600 " : " bg-white"}`}
          >
            
          </li>
          <li
            onClick={() => setHeroCount(1)}
            className={`mini-btns ${heroCount === 1 ? "bg-orange-600 " : " bg-white"}`}
          >
            
          </li>
          <li
            onClick={() => setHeroCount(2)}
            className={`mini-btns ${heroCount === 2 ? "bg-orange-600 " : "bg-white"}`}
          >
            
          </li>
        </ul>

        <div className="min-w-[100px]">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="" className="res-70:w-auto w-[60px] cursor-pointer"
          />
          <p className="text-white res-69:text-[19px] text-[12px]">See the video</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
