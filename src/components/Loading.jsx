import logo from '../assets/logo.png'

const Loading = () => (
  <div className="flex flex-row justify-center items-center h-[30vh] font-bold text-5xl text-center text-gray-400">
    <span className='flex justify-center items-center'>L <img src={logo} alt="" className='w-10 animate-spin' /> ADING</span>
  </div>
);

export default Loading;
