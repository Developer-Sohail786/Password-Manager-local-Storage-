const Service = () => {
  return (
    <>
     <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-green-100"></div>
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What <span className="text-green-600">&lt;</span>Pass
          <span className="text-green-600"> Ly/&gt;</span> Does
      </h1>

      <p className="text-gray-600 leading-relaxed mb-8">
        Passly helps you manage your passwords securely and efficiently
        without unnecessary complexity.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li>• Securely store website credentials</li>
        <li>• Quickly copy usernames and passwords</li>
        <li>• Edit or delete saved credentials anytime</li>
        <li>• Clean and distraction-free interface</li>
      </ul>
    </section>
    </>
  );
};

export default Service;
