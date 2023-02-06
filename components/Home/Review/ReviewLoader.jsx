import React from "react";

const ReviewLoader = ({ className }) => {
    return (
        <div className={`${className} flex flex-col p-6 divide-y rounded-lg divide-base-content/20 border`}>
            <div className="flex justify-between pb-4">
                <div className="flex space-x-4">
                    <div className="bg-base-content/10 w-12 h-12 rounded-full" />

                    <div className="space-y-1.5">
                        <h4 className="bg-base-content/10 h-6 w-24 rounded"></h4>
                        <p className="bg-base-content/10 h-4 w-32 rounded"></p>
                        <p className="bg-base-content/10 h-4 w-36 rounded"></p>
                    </div>
                </div>
                <div className="bg-base-content/10 h-6 w-32 rounded" />
            </div>
            <div className="text-sm space-y-1.5 pt-4">
                <p className="bg-base-content/10 h-4 rounded" />
                <p className="bg-base-content/10 h-4 rounded" />
                <p className="bg-base-content/10 h-4 rounded" />
            </div>
        </div>
    );
};

export default ReviewLoader;
