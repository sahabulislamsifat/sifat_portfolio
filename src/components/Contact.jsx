import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "580f8071-8bd9-4669-96db-bc00e5821545");

    console.log("Sending Data:", Object.fromEntries(formData));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Response Data:", data);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-[#0a192f] text-gray-300 min-h-screen p-4 flex flex-col justify-center pt-[105px] md:pt-0"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 md:mb-16">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              Contact
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#ccd6f6]">
                Get In Touch
              </h3>
              <p className="text-[#8892b0]">
                I'm currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>
              <div className="flex flex-col gap-4 md:mt-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#64ffda]" />
                  <a
                    href="mailto:sahabulislamsifat@gmail.com"
                    className="text-[#8892b0] hover:text-[#64ffda]"
                  >
                    sahabulislamsifat@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#64ffda]" />
                  <a
                    href="tel:01632165523"
                    className="text-[#8892b0] hover:text-[#64ffda]"
                  >
                    01632165523
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#64ffda]" />
                  <span className="text-[#8892b0]">Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[#8892b0]">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 bg-[#233554] rounded mt-2 text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="text-[#8892b0]">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 bg-[#233554] rounded mt-2 text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="text-[#8892b0]">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full p-2 bg-[#233554] rounded mt-2 text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#64ffda] cursor-pointer text-[#0a192f] py-2 px-4 rounded hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] transition duration-300"
                >
                  Send Message
                </button>
              </form>
              <p className="text-[#64ffda] mt-4">{result}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
