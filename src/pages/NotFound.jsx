import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-20 sm:px-8">
      <div className="w-full max-w-2xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          Error 404
        </p>

        <h1 className="mt-5 text-7xl font-bold tracking-tight text-slate-950 sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-slate-950 sm:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          The page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <FiHome size={16} />
            Back Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
          >
            <FiArrowLeft size={16} />
            Go Back
          </button>

        </div>

      </div>
    </main>
  );
}

export default NotFound;