import React from "react";
import axios from "axios";

const state = {
  title: "",
  director: "",
  metaScore: 0,
  actor: "",
  stars: []
};

const UpdateMovie = () => {
  return (
    <div className="addMovie">
      <form>
        <input
          name="title"
          value=""
          label="title"
          id="title"
          type="text"
          placeholder="title"
          // onChange={handleChanges}
        />
        <input
          name="director"
          value=""
          label="director"
          id="director"
          type="text"
          placeholder="director"
          // onChange={handleChanges}
        />
        <input
          name="metascore"
          value=""
          label="metascore"
          id="metascore"
          type="text"
          placeholder="metascore"
          // onChange={handleChanges}
        />
        <input
          name="stars"
          value=""
          label="stars"
          id="stars"
          type="text"
          placeholder="stars"
          // onChange={handleChanges}
        />
      </form>
    </div>
  );
};

export default UpdateMovie;
