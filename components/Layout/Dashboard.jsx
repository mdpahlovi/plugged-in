import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Logo from "../../public/logo/logo.png";
import { Button, ButtonOutline, IconButton } from "../Common/Buttons";
import ThemeToggle from "../Common/ThemeToggle";
import { useAuth } from "../../hooks/useAuth";
import { ImSearch } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { TiArrowBackOutline } from "react-icons/ti";
import { Protect } from "../Common/ProtectedRoute";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/SocketProvider";
import useDashboardRoutes from "../../hooks/useDashboardRoutes";

const Dashboard = ({ title, children, className }) => {
  const { authUser, logout } = useAuth();
  const { pathname } = useRouter();
  const { socket } = useContext(SocketContext);
  const { routes } = useDashboardRoutes(authUser?.email);

  const { data: rooms = [] } = useQuery({
    queryKey: ["getRooms"],
    queryFn: () =>
      fetch("https://plugged-in-server.onrender.com/getRooms").then((res) =>
        res.json()
      ),
  });

  console.log("splitedPathName", pathname.split("/")[3]);
  console.log("pathName", pathname);
  useEffect(() => {
    rooms.map((room) => {
      if (room.roomName == pathname.split("/")[3]) {
        socket.emit("join_room", room.roomName);
      }
    });
  }, [pathname]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <section className="drawer drawer-mobile">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Header Section */}
          <header className="min-h-[64px] z-10 fixed border-b w-full bg-base-100 flex items-center justify-between px-6 lg:w-[calc(100%-18rem)]">
            <div className="flex items-center gap-5">
              <label htmlFor="drawer" className="lg:hidden mt-1">
                <IconButton>
                  <MdMenuOpen className="text-xl" />
                </IconButton>
              </label>
              <h2>Dashboard</h2>
            </div>
            <div className="flex items-center gap-6">
              <div hidden className="relative h-full sm:flex items-center">
                <ImSearch className="absolute text-xl left-2.5" />
                <div className="absolute w-[1px] h-full bg-base-content/10 left-[38px]" />
                <input
                  type="search"
                  name="search"
                  placeholder="Search here"
                  className="input h-10 focus:outline-none pl-12"
                />
              </div>
              <IconButton className="h-max sm:hidden">
                <ImSearch className="text-xl" />
              </IconButton>
              <ThemeToggle />
            </div>
          </header>
          <div className="py-8"></div>
          {/*  Content Here */}
          <main className={`p-6 ${className}`}>{children}</main>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <div className="w-[18rem] h-screen flex flex-col justify-between bg-base-100 border-r p-6">
            <div>
              <Link href="/" className="block pb-6">
                <Image src={Logo} alt="logo" width={144} />
              </Link>
              {routes.map(({ href, name, icon }, index) => (
                <Link key={index} href={href}>
                  {href === pathname ? (
                    <Button className="w-full text-left flex items-center gap-4">
                      {icon}
                      {name}
                    </Button>
                  ) : (
                    <button className="w-full text-left flex items-center gap-4 px-6 py-3 rounded-full hover:bg-base-content/10">
                      {icon}
                      {name}
                    </button>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/">
                <ButtonOutline>
                  <div className="flex items-center gap-2">
                    <TiArrowBackOutline className="text-xl" />
                    Back To Home
                  </div>
                </ButtonOutline>
              </Link>
              <ButtonOutline onClick={() => logout()}>
                <div className="flex items-center gap-2">
                  <HiOutlineLogout className="text-xl" />
                  Log Out
                </div>
              </ButtonOutline>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Protect(Dashboard);
