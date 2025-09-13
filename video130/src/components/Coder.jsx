import React from "react";

const Coder = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-20 text-center">
        <div className="md:max-w-4xl max-w-2xl">
          {/* Profile / Avatar */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://via.placeholder.com/150" // replace with your photo
              alt="Faisal Avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-900 shadow-lg"
            />
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
            Hi, I’m <span className="text-purple-900">Mohammad Faisal</span>
          </h1>

          {/* Role */}
          <h2 className="mb-4 text-lg font-medium text-slate-800">
            Frontend Developer • BCA Final Year Student
          </h2>

          {/* Summary */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
            Passionate Frontend Developer skilled in{" "}
            <span className="font-semibold">JavaScript, TypeScript, React.js, Next.js, Redux, and Tailwind CSS</span>.  
            Currently learning server-side rendering with Next.js App Router.  
            I love solving real-world problems through{" "}
            <span className="font-semibold">web development and API integration</span>,  
            and I’m always eager to learn and contribute in collaborative environments.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/faisalzgit"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/faisalz1/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            >
              LinkedIn
            </a>
            <a
              href="https://faisalzportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            >
              Portfolio
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 text-slate-600">
            <p>📧 <a href="mailto:muhammadfaisal95610@gmail.com" className="underline">muhammadfaisal95610@gmail.com</a></p>
            <p>📞 +91 9561070039</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coder;
