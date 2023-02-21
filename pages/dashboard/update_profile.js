import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const UpdateProfile = () => {
    const { user} = useAuth();
    return (
        <div className='pb-10'>
        <form className='max-w-4xl mx-auto'>
            <div>
            <label className="label">
                    <span className="label-text text-xl">Upload profile picture</span>
                </label>
                <input type="file" name='image' className="file-input  file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" defaultValue={user?.name} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" disabled defaultValue={user?.email} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Phone</span>
                </label>
                <input type="text" name="phone" placeholder="Phone No." defaultValue={user?.phone} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Address</span>
                </label>
                <input type="text" name="address" placeholder="Address" defaultValue={user.road} className="input input-bordered" />
            </div>
            <div>
                <button type='submit' className="btn max-w-sm mx-auto flex justify-center mt-6 border-2 bg-gradient-to-br from-secondary via-primary to-accent border-violet-400 text-white rounded-2xl hover:bg-base-100 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-primary duration-300">Update</button>
            </div>


        </form>
    </div>
    );
};

export default UpdateProfile;