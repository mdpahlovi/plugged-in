import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useGetUser from "../../hooks/useGetUser";
import { Button, ButtonOutline } from "../Common/Buttons";
import Dashboard from "./Dashboard";

const Teams = ({ className, children, title }) => {
    const { authUser } = useAuth();
    const { userLoading, user, userRefetch } = useGetUser(authUser?.email);
    const { asPath } = useRouter();

    return (
        <Dashboard title={asPath === "teams" ? `${authUser?.displayName} Teams` : title}>
            <div className="mb-6 flex flex-col-reverse xs:flex-row justify-between gap-6">
                <div
                    className={`max-w-full xs:max-w-[calc(100vw_-_15.25rem)] lg:max-w-[calc(100vw_-_33.75rem)] overflow-y-auto scroll-my-4 flex gap-4 ${
                        userLoading ? "animate-pulse" : ""
                    }`}
                >
                    {userLoading
                        ? [...Array(2)].map((isTeam, index) => (
                              <div key={index} className="pb-2">
                                  <div className="w-32 h-12 rounded-full bg-base-content/10" />
                              </div>
                          ))
                        : user?.team.map((isTeam, index) => (
                              <div key={index}>
                                  {asPath === `/dashboard/teams/${isTeam?.leader}` ? (
                                      <Button>{isTeam?.name}</Button>
                                  ) : (
                                      <div className="px-6 py-3 rounded-full text-blue-500 underline hover:bg-base-content/10">
                                          <Link href={`/dashboard/teams/${isTeam?.leader}`}>{isTeam?.name}</Link>
                                      </div>
                                  )}
                              </div>
                          ))}
                </div>
                <Link href="/checkout/team?price=15">
                    <ButtonOutline>Create new team</ButtonOutline>
                </Link>
            </div>
            <div className={className}>{children}</div>
        </Dashboard>
    );
};

export default Teams;
