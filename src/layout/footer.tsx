import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t-1 border-break max-sm:mb-11">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name or Logo */}
        <div className="text-xl font-semibold">Anas Abdelhakim</div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="#about" className="opacity-hover">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="opacity-hover">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="opacity-hover">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="opacity-hover">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com/anasabdelhakim"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hoverd"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/anas-abdelhakim-548aa5268"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hoverd"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:youremail@example.com" className="icon-hoverd">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
