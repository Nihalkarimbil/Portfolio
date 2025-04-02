import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-secondary py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Nihal. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
