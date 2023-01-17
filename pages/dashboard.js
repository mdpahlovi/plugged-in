import React from 'react';

const DashboardPages = () => {
    return (
        <div>
            <div>
                <div className="drawer z-10  drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-gray-200 relative ">
                        {/* header section start */}
                        <div>
                            <div class="ml-auto mb-6 lg:w-[100%] xl:w-[100%] 2xl:w-[85%]">
                                <div class="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
                                    <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
                                        <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
                                        <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="my-auto h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        </button>
                                        <div class="flex space-x-4">
                                            {/* <!--search bar --> */}
                                            <div hidden class="md:block">
                                                <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                                    <span class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                                                        <svg
                                                            xmlns="http://ww50w3.org/2000/svg"
                                                            class="w-4 fill-current"
                                                            viewBox="0 0 35.997 36.004"
                                                        >
                                                            <path
                                                                id="Icon_awesome-search"
                                                                data-name="search"
                                                                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type="search"
                                                        name="leadingIcon"
                                                        id="leadingIcon"
                                                        placeholder="Search here"
                                                        class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                                                    />
                                                </div>
                                            </div>
                                            {/* <!--/search bar --> */}
                                            <button
                                                aria-label="search"
                                                class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
                                            >
                                                <svg
                                                    xmlns="http://ww50w3.org/2000/svg"
                                                    class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                                                    viewBox="0 0 35.997 36.004"
                                                >
                                                    <path
                                                        id="Icon_awesome-search"
                                                        data-name="search"
                                                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* header section end */}
                        <div className='flex  items-center justify-center'>
                            {/*  Content Here */}
                            <h1>Content</h1>
                        </div>


                        <label htmlFor="my-drawer-2" className=" bg-teal-500 rounded-full text-white p-2   absolute top-5 left-5 drawer-button lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="my-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu font-semibold z-10 md:bg-white bg-gray-300  p-2 w-80  text-base-content">
                            <div className='text-[#BE123B] font bold text-lg'>
                                <div class=" mb-10">
                                    <button href="#" title="home">
                                        <img src="https://pluggedin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.27196d2f.png&w=128&q=75" class="w-32" alt="tailus logo" />
                                    </button>
                                </div>
                                <li>
                                    <button
                                        href="#"
                                        aria-label="dashboard"
                                        class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF] px-4 py-3 text-white"
                                    >
                                        <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                                class="dark:fill-slate-600 fill-current text-secondary"
                                            ></path>
                                            <path
                                                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                                class="fill-current text-error group-hover:text-cyan-300"
                                            ></path>
                                            <path
                                                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                                class="fill-current group-hover:text-sky-300"
                                            ></path>
                                        </svg>
                                        <span class="-mr-1 font-medium">Dashboard</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        href="#"
                                        class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                class="fill-current text-gray-300 group-hover:text-violet-900"
                                                fill-rule="evenodd"
                                                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                                clip-rule="evenodd"
                                            />
                                            <path
                                                class="fill-current text-gray-600 group-hover:text-secondary dark:group-hover:text-sky-400"
                                                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                            />
                                        </svg>
                                        <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Categories</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        href="#"
                                        class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                class="fill-current text-gray-600 group-hover:text-violet-900 dark:group-hover:text-sky-400"
                                                fill-rule="evenodd"
                                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                clip-rule="evenodd"
                                            />
                                            <path
                                                class="fill-current text-gray-300 group-hover:text-secondary"
                                                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                            />
                                        </svg>
                                        <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Recording</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        href="#"
                                        class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                class="fill-current text-gray-600 group-hover:text-violet-900 dark:group-hover:text-cyan-400"
                                                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                            />
                                            <path
                                                class="fill-current text-gray-300 group-hover:text-secondary"
                                                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                            />
                                        </svg>
                                        <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
                                    </button>
                                </li>
                                <li className='md:mt-56 sm:mt-40'>
                                    <button class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                class="group-hover:text-violet-900"
                                            />
                                        </svg>
                                        <span class="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPages;