import Link from "next/link";
import Main from "../components/Layout/Main";
import { Button } from "../components/Buttons";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import useSetUserToDb from "../hooks/useSetUserToDb";
import { useState } from "react";

const Registration = () => {
  const { loading, setLoading, createUser, updateUserProfile } = useAuth();
  const router = useRouter();
  const [createdUser, setCreatedUser] = useState("");
  const [error, setError] = useState("");
  const { confirmation } = useSetUserToDb(createdUser);
  // Registration using react-hook-form

  if (confirmation.acknowledged) {
    router.push("/dashboard");
    toast.success("User created successfully");
  }


  const { register, handleSubmit } = useForm();
  //   const handleRegistration = (userInfo) => {
  //     const userData = {
  //       name: userInfo.name,
  //       email: userInfo.email,
  //       password: userInfo.password,
  //       cpassword: userInfo.cpassword,
  //       image: userInfo.image[0],
  //     };
  //     console.log(userData);

  //     const formData = new FormData();
  //     formData.append("image", userData.image);

  //     fetch(`https://api.imgbb.com/1/upload?key=${imageBBScrert}`, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((imageData) => {
  //         console.log(imageData.data.url);
  //         userData.image = imageData.data.url;
  //         console.log(userData);
  //         createUser(userData.email, userData.password)
  //           .then((result) => {
  //             const user = result.user;
  //             updateProfile(userData.name, userData.image);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //           });
  //       });
  //   };
  const handleRegistration = (userInfo) => {
    setError("");

    if (userInfo.password !== userInfo.cpassword) {
      setError("Password did't matched");
      return;
    } else if (userInfo.password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        updateProfile(userInfo.name);
        setCreatedUser(user);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const updateProfile = (name) => {
    updateUserProfile(name)
      .then(() => {})
      .catch((data) => {
        console.error(data);
      });
  };

  return (
    <Main title="Registration to PluggedIn">
      <div className="section-gap bg-base-100 max-w-lg sm:mx-auto shadow-lg drop-shadow p-8 space-y-6 rounded-lg mx-8">
        <h2 className="text-center">Create your account</h2>
        <form
          action=""
          onSubmit={handleSubmit(handleRegistration)}
          className="space-y-4"
        >
          <div className="space-y-1">
            <label htmlFor="name" className="block font-semibold">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Full Name"
              className="input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="Your Email"
              className="input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              id="password"
              placeholder="Your Password"
              className="input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              name="cPassword"
              id="cPassword"
              {...register("cpassword")}
              placeholder="Confirm Password"
              className="input"
            />
          </div>
          <p className="text-red-800 font-bold">{error}</p>
          <div className="pt-2">
            <Button className="w-full" type="submit">
              {loading ? "Loading" : "Register"}
            </Button>
          </div>
        </form>
        <p className="text-center">
          Already have a account?
          {/* <Link href="/login" className="ml-2 underline text-indigo-900">
            Login Now
          </Link> */}
          <Link href="/login" className="btn btn-link">
            Login Now
          </Link>
        </p>
      </div>
      <div className="-mt-20 md:-mt-16 -mb-14 sm:-mb-[72px] md:-mb-[88px] w-screen">
        <Wave
          fill="#201172"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 6,
          }}
        />
      </div>
    </Main>
  );
};

export default Registration;
