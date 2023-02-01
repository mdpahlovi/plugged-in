import React from 'react';
import Dashboard from '../../components/Layout/Dashboard'
const message = () => {
    return (
        <Dashboard className="container mx-auto">
            <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
                <div className="border-r border-gray-300 lg:col-span-1">
                    <div className="mx-3 my-3">
                        <div className="relative text-gray-600">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                                placeholder="Search" required />
                        </div>
                    </div>

                    <ul className="overflow-auto h-[32rem]">
                        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                        <li>
                            <a
                                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full"
                                    src="https://pluggedin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgobinda.cbc9d057.png&w=384&q=75" alt="username" />
                                <div className="w-full pb-2">
                                    <div className="flex justify-between">
                                        <span className="block ml-2 font-semibold text-gray-600">Govinda</span>
                                        <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
                                    </div>
                                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                                </div>
                            </a>
                            <a
                                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full"
                                    src="https://pluggedin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsafayet.3496e328.png&w=384&q=75" alt="username" />
                                <div className="w-full pb-2">
                                    <div className="flex justify-between">
                                        <span className="block ml-2 font-semibold text-gray-600">Safayet</span>
                                        <span className="block ml-2 text-sm text-gray-600">50 minutes</span>
                                    </div>
                                    <span className="block ml-2 text-sm text-gray-600">Good night</span>
                                </div>
                            </a>
                            <a
                                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full"
                                    src="https://pluggedin.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp5wEf0mKPTZdYCTf4BzsMz3lRZIsTFvsM6HFN0e%3Ds96-c&w=128&q=75" alt="username" />
                                <div className="w-full pb-2">
                                    <div className="flex justify-between">
                                        <span className="block ml-2 font-semibold text-gray-600">Faisal</span>
                                        <span className="block ml-2 text-sm text-gray-600">6 hour</span>
                                    </div>
                                    <span className="block ml-2 text-sm text-gray-600">Good Morning</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:col-span-2 lg:block">
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                            <img className="object-cover w-10 h-10 rounded-full"
                                src="https://pluggedin.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp5wEf0mKPTZdYCTf4BzsMz3lRZIsTFvsM6HFN0e%3Ds96-c&w=128&q=75" alt="username" />
                            <span className="block ml-2 font-bold text-gray-600">Faisal</span>
                            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                            </span>
                        </div>

                        {/* Messges Section */}
                        <div className="relative w-full p-6 overflow-y-auto">
                            <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                    <img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src="https://pluggedin.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp5wEf0mKPTZdYCTf4BzsMz3lRZIsTFvsM6HFN0e%3Ds96-c&w=128&q=75" alt="" />
                                </div>
                                <div>
                                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                </div>
                            </div>
                            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                <div>
                                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                </div>
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                    <img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src="https://pluggedin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpahlovi.9cd055bf.png&w=384&q=75" alt="" />
                                </div>
                            </div>
                            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                <div>
                                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                </div>
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                    <img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src="https://pluggedin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpahlovi.9cd055bf.png&w=384&q=75" alt="" />
                                </div>
                            </div>
                            <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                    <img className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" src="https://pluggedin.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAEdFTp5wEf0mKPTZdYCTf4BzsMz3lRZIsTFvsM6HFN0e%3Ds96-c&w=128&q=75" alt="" />
                                </div>
                                <div>
                                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                </div>
                            </div>
                        </div>
                        {/* Submit Section */}
                        <div className="flex items-center justify-between w-full p-3 border border-gray-300">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>

                            <input type="text" placeholder="Message"
                                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message" required />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                            <button type="submit">
                                <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default message;