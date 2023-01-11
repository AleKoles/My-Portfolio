import React from "react";

const Contacts = () => {
  return (
    <div className="w-full h-fit pb-24 bg-dark-blue">
      <div className="w-full mt-[100px] z-0 text-white px-2 md:px-10">
        <h2 className="pb-10 pt-16 text-5xl text-center font-bold">
          Contact me
        </h2>
        <form
          action="https://getform.io/f/d32f1b29-b440-4885-a551-98e3312590ae"
          method="POST"
          className="w-8/12 mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between text-black">
            <input
              className="sm:my-4 p-2 rounded-md w-full sm:w-5/12"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 rounded-md w-full sm:w-5/12"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <textarea
            className="mx-auto p-2 w-full rounded-md text-black"
            name="message"
            rows="10"
            placeholder="Message me"
          ></textarea>

          <div className="flex justify-center">
            <button className="mx-3 my-2 box-border bg-dark-blue text-white rounded-3xl uppercase px-8 py-3 hover:bg-white hover:text-dark-blue">
              Let's collaborate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
