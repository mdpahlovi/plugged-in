const MemberCardLoader = () => {
    return (
        <div className="border rounded-lg">
            <div className="flex justify-end p-4">
                <div className="w-[34px] h-[34px] rounded-full bg-base-content/10" />
            </div>
            <div className="-mt-8 flex flex-col items-center pb-8 px-8">
                <div className="w-28 h-28 rounded-full bg-base-content/10" />
                <div className="mt-3 mb-2 flex items-center gap-2">
                    <div className="w-36 h-6 rounded bg-base-content/10" />
                    <h5 className="h-4 w-12 rounded bg-base-content/10"></h5>
                </div>
                <div className="h-4 w-36 rounded bg-base-content/10" />
                <div className="mt-3 w-full grid grid-cols-2 gap-4">
                    <div className="h-12 rounded-full bg-base-content/10" />
                    <div className="h-12 rounded-full bg-base-content/10" />
                </div>
            </div>
        </div>
    );
};

export default MemberCardLoader;
