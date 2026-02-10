import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-green-100" />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h1>

        <p className="text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
          Connect with me on the platforms below.
        </p>

        <div className="flex justify-center gap-8 sm:gap-10 text-2xl sm:text-3xl">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918918716256"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sohailkhan_n19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 hover:text-purple-500 hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Developer-Sohail786"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-900 hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sohail-khan-8a5b36371/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
