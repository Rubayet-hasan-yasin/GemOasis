import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" py-10">
            <div className="container mx-auto">
                {/* upper side */}
                <div>
                    {/* grid parent */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 justify-evenly pb-4">
                        {/* first col */}
                        <div>
                            {/* <img src={logo} alt="logo" /> */}
                            <div className="text-gray-500 font-bold text-4xl">GameOasis</div>
                            <p className="pt-2 text-[#999FA8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        {/* second col */}
                        <div>
                            <p className="text-xl font-semibold">Quick Links</p>
                            <ul className=" text-[#999FA8]">
                                <Link>
                                    <li>Home</li>
                                </Link>
                                <Link>
                                    <li>All jewelry</li>
                                </Link>
                                <Link>
                                    <li>My Jewelry</li>
                                </Link>
                                <Link>
                                    <li>Add jewelry</li>
                                </Link>
                                <Link>
                                    <li>Blogs</li>
                                </Link>
                            </ul>

                        </div>
                        {/* third col */}
                        <div>
                            <p className="text-xl font-semibold">Customer Service</p>
                            <ul className="text-[#999FA8]">
                                <li>FAQ</li>
                                <li>Shipping</li>
                                <li>Returns</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        {/* fourth col */}
                        <div>
                            <p className="text-xl font-semibold">Contact Us</p>
                            {/* location */}
                            <div className="flex items-center gap-3 text-[#999FA8]">
                                <IoLocation />
                                <span>3556 Beech Street, USA</span>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center gap-3 text-[#999FA8]">
                                <BiPhoneCall />
                                <a href="tel:+1 315 369 5943">+1 315 369 5943</a>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-3 text-[#999FA8]">
                                <HiOutlineMail />
                                <a href="mailto:doccure@example.com">doccure@example.com</a>
                            </div>
                        </div>
                        {/* fifth col */}
                        <div className="space-y-2">
                            <p className="text-xl font-semibold">Join Our Newsletter</p>
                            <form className="flex items-center">
                                <input
                                    type="email"
                                    name="name"
                                    className="border px-1 py-1 rounded-l focus:outline-none"
                                    placeholder="Enter Email"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 py-[5px] px-[6px] font-semibold text-white rounded-r"
                                >
                                    Submit
                                </button>
                            </form>
                            {/* Socials logos */}
                            <div className="flex items-center gap-2">
                                <FaFacebook className="text-xl text-[#999FA8]" />
                                <FaTwitter className="text-xl text-[#999FA8]" />
                                <FaInstagram className="text-xl text-[#999FA8]" />
                                <FaLinkedin className="text-xl text-[#999FA8]" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* down side */}
                <div className="text-center md:flex justify-between items-center border-t border-gray-300">
                    <p className="pt-2 text-[#999FA8]">Copyright © 2023 <span className="text-gray-700">GameOasis.</span> All Rights Reserved</p>
                    <p className="text-[#999FA8]">Privacy Policy &nbsp; &nbsp; | &nbsp; &nbsp; Terms and Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;