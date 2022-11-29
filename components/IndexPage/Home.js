import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col p-8 md:px-[100px] h-screen w-full "
      >
        <InfoText />
        <InfoImages />
      </div>
      <Extra />
    </>
  );
};

export default Home;

const InfoText = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20  gap-4">
      <h1 className="text-xl md:text-6xl text-center font-extrabold text-slate-800 leading-snug md:leading-tight">
        Training Portal,
        <span className="text-blue-700">synced automatically.</span>{" "}
      </h1>
      <h4 className="text-slate-500  text-lg md:text-xl">
        Keep track of where your money is going, organize your expenses, and see
        everything in one place.
      </h4>
      <InfoTextActions />
    </div>
  );
};

const InfoImages = () => {
  return (
    <div className="grow flex items-center justify-center overflow-x-auto sm:overflow-visible">
      <div className="w-full m-4 h-[630px]  mockup-window border bg-base-300">
        <div className="flex justify-center bg-base-200">Hello!</div>
      </div>
    </div>
  );
};

const InfoTextActions = () => {
  return (
    <div className="w-full flex justify-center p-2">
      <Link passHref href="/main">
        <button className="grow group flex items-center justify-center gap-4 text-slate-100 bg-blue-700  font-semibold p-2 max-w-[250px] rounded-lg hover:bg-blue-600 active:outline outline-blue-200 ">
          check it out
          <span className="text-xl group-hover:translate-x-1.5 duration-200">
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </Link>
    </div>
  );
};

const Extra = () => {
  return <div className="hidden md:block min-h-[500px] bg-slate-700"></div>;
};
