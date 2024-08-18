import React from "react";
import ImageOverlaysCenter from "@/components/ImageOverlaysCenter";

const page = () => {
  return (
    <>
      <div>
        <ImageOverlaysCenter
          title="Contact Us"
          des="Reach out to us for electrifying solutions!"
          imgURL="/contact.jpg"
        />
      </div>
      <div className="max-w-screen-xl p-2 w-full my-3 lg:my-5 mx-auto ">
        <div className=" rounded-lg  md:flex">
          {/* Form Section */}
          <div className="md:w-1/2 py-5 lg:px-5">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  FirstName
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg lg:text-xl font-medium text-gray-700"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block text-sm lg:text-base w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-lg lg:text-xl text-white font-semibold py-2 px-4 rounded-md hover:bg-secand transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Map Section */}
          <div className="md:w-1/2 py-5 lg:px-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51929.858465514895!2d45.41885452183222!3d35.56318096433548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2z2KfZhNiz2YTZitmF2KfZhtmK2KksIEt1cmRpc3RhbiBSZWdpb24!5e0!3m2!1sar!2siq!4v1723470629892!5m2!1sar!2siq"
              className="w-full h-64 md:h-full rounded-md shadow-lg"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
