// import { useReactMediaRecorder } from "react-media-recorder";

const ScreenRecorder = () => {
    //   const { status, startRecording, stopRecording, mediaBlobUrl } =
    //     useReactMediaRecorder({ screen: true });

    return (
        <div className="lg:flex items-center justify-evenly mt-10">
            <div className="card w-96 shadow-xl bg-base-100 mx-auto hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 ">
                <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="w-full h-20">
                        <path
                            stroke-linecap="round"
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Video Record</h2>
                    <div className="card-actions">
                        <button className="btn btn-circle btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto cursor-pointer hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 ">
                <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" class="w-full h-20">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                        />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Audio Record</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto cursor-pointer hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 ">
                <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" class="w-full h-20">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Screen Record</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenRecorder;

{
    /* <div className="flex flex-col items-center">
      <button className="btn btn-primary mx-[50%] my-10 rounded-full w-[100px] h-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </button>
      <p className="text-3xl font-bold text-blue-800">Screen Recorder</p>
    </div> */
}
