import React, { useState } from "react";

export const Join = ({handleSubmit}) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <div>
        <form
           onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userName);
          }}
        >
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
          />
         <button>Join</button>
        </form>
      </div>
      {/* <button>Join</button> */}
      
    </div>
  );
};
