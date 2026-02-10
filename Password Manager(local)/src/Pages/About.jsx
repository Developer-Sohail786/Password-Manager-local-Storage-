const About = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-green-100" />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About{" "}
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600"> Ly/&gt;</span>
        </h1>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
          Passly is a simple and secure password manager built to help users
          store, manage, and access their credentials safely.
          It focuses on clean design, local storage security, and ease of use.
        </p>
      </section>
    </div>
  );
};

export default About;

