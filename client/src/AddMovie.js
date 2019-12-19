import React from "react";

const AddMovie = () => {
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
          onChange={handleChanges}
        />
        <input
          name="director"
          value=""
          label="director"
          id="director"
          type="text"
          placeholder="director"
          onChange={handleChanges}
        />
        <input
          name="metascore"
          value=""
          label="metascore"
          id="metascore"
          type="text"
          placeholder="metascore"
          onChange={handleChanges}
        />
        <input
          name="stars"
          value=""
          label="stars"
          id="stars"
          type="text"
          placeholder="stars"
          onChange={handleChanges}
        />
      </form>
    </div>
  );
};

export default AddMovie;
