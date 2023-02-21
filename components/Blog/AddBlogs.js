import React from 'react';

const AddBlogs = () => {
    return (
        <div className='pb-10'>
            <form className='max-w-4xl mx-auto'>
                <div>
                    <label className="label">
                        <span className="label-text text-xl">Photo</span>
                    </label>
                    <input type="file" name='image' className="file-input  file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Date</span>
                    </label>
                    <input type="text" name="category" placeholder="your category" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Your Title</span>
                    </label>
                    <input type="text" name="title" placeholder="your title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Descriptions</span>
                    </label>
                    <textarea type="text" name="phone" placeholder="Your Blogs" className="input input-bordered h-40" />
                </div>
                <div>
                    <button type='submit' className="btn max-w-sm mx-auto flex justify-center mt-6 border-2 bg-gradient-to-br from-secondary via-primary to-accent border-violet-400 text-white rounded-2xl hover:bg-base-100 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-primary duration-300">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default AddBlogs;