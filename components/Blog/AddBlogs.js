import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, SpinLoader } from '../Common/Buttons';

const AddBlogs = ({ updateLoading, handleAddBlog }) => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(handleAddBlog)} className="max-w-4xl space-y-3">
            <div className="form-control space-y-1.5">
                <label className="font-bold tracking-wide">Photo</label>
                <input type="file" {...register("img")} className="file-input file-input-bordered file-input-primary focus:outline-none w-full" />
            </div>
            <div className="form-control space-y-1.5">
                <label className="font-bold tracking-wide">Category</label>
                <input type="text" {...register("category")} placeholder="Category" className="input" />
            </div>
            <div className="form-control space-y-1.5">
                <label className="font-bold tracking-wide">Title</label>
                <input type="text" {...register("title")} placeholder="Title" className="input" />
            </div>
            <div className="form-control space-y-1.5">
                <label className="font-bold tracking-wide">Description</label>
                <textarea {...register("description")} className="textarea focus:outline-none textarea-bordered w-full" placeholder="Description" rows={4} ></textarea>
            </div>
            <div>
                <Button type="submit" className="w-full mt-1">
                    {updateLoading ? <SpinLoader>Uploading</SpinLoader> : "Upload Now"}
                </Button>
            </div>
        </form>
    );
};

export default AddBlogs;