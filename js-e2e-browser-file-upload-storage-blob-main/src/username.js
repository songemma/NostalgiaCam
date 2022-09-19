import React, { useState } from "react";

const Username = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <form>
        <label>
          Username:
          <input
            type="text"
            // name="name"
            // onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{username}</p>
    </>
  );
};

export default Username;
