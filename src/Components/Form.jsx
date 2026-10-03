import { useState } from "react";
import '../App.css'

function Form({ addNote }) {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

   if (heading.trim() === "") {
      alert("Please enter a heading");
    return;
  }

  console.log("Heading:", heading);
  console.log("Details:", details);

    addNote({
      heading: heading.trim().toUpperCase(),
      details: details.trim(),
    });

    setHeading("");
    setDetails("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 rounded-xl bg-white p-6 shadow-md"
    >
      <h1 className="text-2xl font-bold">
        Create Note
      </h1>

      <input
        type="text"
        placeholder="Enter note heading"
        value={heading}
        onChange={(event) => setHeading(event.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      />

      <textarea
        placeholder="Enter note details"
        rows="5"
        value={details}
        onChange={(event) => setDetails(event.target.value)}
        className="resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      ></textarea>

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>

  );
}

export default Form;