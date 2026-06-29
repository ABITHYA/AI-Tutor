function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        <h1 className="text-3xl font-bold text-violet-500">
          LearnNova AI
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">AI Tutor</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <button className="bg-violet-600 px-5 py-2 rounded-full hover:bg-violet-500 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;