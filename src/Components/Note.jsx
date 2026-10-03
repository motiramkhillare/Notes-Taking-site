import "../App.css";

function Note({ heading, details, deleteNote }) {
  return (
    <div
  className="relative min-h-56 w-full overflow-hidden rounded-2xl border border-amber-200 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/tPcbZwGXFRXzKbPIRhGmczBecDR2AWI-QLuTL9ePM1c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MC8yMy8xNS80Ny9w/YXBlci0xNzYzMjYy/XzY0MC5wbmc')",
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-black/60">
        NOTE
      </p>

      <h2 className=" text-2xl font-bold uppercase tracking-wide text-black">
        {heading}
      </h2>
    
      <div className="my-4 h-px w-full bg-black/30"></div>


      {details && (
        <p className="whitespace-pre-wrap leading-7 text-black">
        {details}
      </p>
      )}

      <button
        onClick={deleteNote}
        className="absolute bottom-4 right-4 rounded-lg bg-black/80 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;