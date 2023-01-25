import React from 'react';

const Profile = () => {
    return (
        <div>
            <h1 className='mt-10 text-center'>Welcome To Pluggedin</h1>
            <div class="container mt-28">
                <div class="bg-white relative shadow rounded-lg w-full md:w-full  lg:w-full xl:w-full ">
                    <div class="flex justify-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv31krV1KwK-JjywgloPbfaYhasBfy2XYDDQ&usqp=CAU" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div class="mt-16">
                        <h1 class="font-bold text-center text-3xl text-gray-900">Jhankar Mahbub</h1>
                        <p class="text-center text-sm text-gray-400 font-medium">Online Video Service System</p>
                        <p>
                            <span>

                            </span>
                        </p>
                        <div class="my-5 px-6">
                            <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF] hover:bg-black hover:text-white">Connect with <span class="font-bold">@pluggedin</span></a>
                        </div>
                        <div class="flex justify-between items-center my-5 px-6">
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                        </div>

                        <div class="w-full">
                            <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                            <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Joined a Video
                                    <span class="text-gray-500 text-xs ml-2">24 min ago</span>
                                </a>
                                <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Edited Profile settings
                                    <span class="text-gray-500 text-xs ml-2">1 day ago</span>
                                </a>
                                <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    You have Record Total 10 Videos
                                </a>


                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Profile;