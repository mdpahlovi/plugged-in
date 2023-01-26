const RecordLoader = () => {
    return (
        <>
            <div>
                <div className="aspect-video w-full rounded-lg bg-base-content/10" />
                <div className="space-y-4 border border-t-0 p-4 pt-6 rounded-lg -mt-2">
                    <div className="flex justify-between items-center">
                        <div className="w-40 h-5 bg-base-content/10" />
                        <div className="flex gap-4">
                            <div className="w-[34px] h-[34px] bg-base-content/10 rounded-full" />
                            <div className="w-[34px] h-[34px] bg-base-content/10 rounded-full" />
                        </div>
                    </div>
                    <div className="h-10 bg-base-content/10 rounded" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-base-content/10 rounded-full" />
                        <div className="h-12 bg-base-content/10 rounded-full" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-end gap-4 pb-4 pr-4">
                    <div className="w-6 h-6 rounded-full bg-base-content/10" />
                    <div className="w-6 h-6 rounded-full bg-base-content/10" />
                    <div className="w-6 h-6 rounded-full bg-base-content/10" />
                    <div className="w-6 h-6 rounded-full bg-base-content/10" />
                    <div className="w-6 h-6 rounded-full bg-base-content/10" />
                </div>
                <div className="w-full h-40 rounded-lg bg-base-content/10" />
                <div className="mt-4 w-40 h-12 bg-base-content/10 rounded-full" />
                <div className="mt-4 w-full h-32 rounded-lg bg-base-content/10" />
                <div className="mt-4 w-full h-32 rounded-lg bg-base-content/10" />
            </div>
        </>
    );
};

export default RecordLoader;
