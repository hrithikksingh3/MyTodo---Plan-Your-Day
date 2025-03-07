import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-gray-400 py-6 px-4 mt-10 rounded-xl text-center">
            {/* Footer Title */}
            <h2 className="text-xl font-bold text-violet-300">MyTodo - Plan Your Day</h2>

            {/* Navigation Links */}
            <div className="flex justify-center gap-4 mt-3 text-sm">
                <a href="#" className="hover:text-white">About</a>
                <a href="#" className="hover:text-white">Help Center</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-4 text-xl">
                <a href="https://www.linkedin.com/in/hrithikksingh" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/hrithikksingh3" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://medium.com/@hrithikkumarsingh" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                <a href="https://x.com/codersvoice_" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/codersvoice" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>

            {/* Copyright */}
            <p className="text-xs mt-5">Developed with love by Hrithik © {new Date().getFullYear()} MyTodo. All rights reserved.</p>    
        </footer>
    );
};

export default Footer;
