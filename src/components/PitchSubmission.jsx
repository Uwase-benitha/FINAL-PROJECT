import React, { useState } from "react";
import "./PitchSubmission.css";

const PitchSubmission = () => {
  const [pitch, setPitch] = useState("");
  const [file, setFile] = useState(null);

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    console.log("Pitch Submitted:", pitch, file);
  };

  return (
    <div className="pitch-submission">
      <h1>Submit Your Pitch</h1>
      <form onSubmit={handlePitchSubmit}>
        <textarea
          placeholder="Write your pitch here..."
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit Pitch</button>
      </form>
    </div>
  );
};

export default PitchSubmission;
