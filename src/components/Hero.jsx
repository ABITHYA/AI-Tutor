function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">

      <div>

        <h1 className="text-7xl font-bold leading-tight">
          Learn Beyond
          <br />
          <span className="text-violet-500">
            Limits.
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-xl max-w-2xl">
          An AI-powered Learning Management System that helps students learn faster,
          smarter, and more effectively.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-violet-600 px-8 py-4 rounded-full hover:bg-violet-500">
            Get Started
          </button>

          <button className="border border-gray-500 px-8 py-4 rounded-full hover:border-violet-500">
            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;