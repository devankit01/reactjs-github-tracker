
import React from "react";

function Repo({ name }) {
  return (
      <>
    <div className="repo__card">
      <div className="icon">
        <i class="fab fa-codepen"></i>
      </div>
      <div className="repo__info">
        <h5>{name}</h5>
        <a href="" className="text_light">
          Clone now &rarr;
        </a>
      </div>
    </div>
    </>
  );
}

export default Repo;
// import React from "react";

// function Repo({ name }) {
//   return (
//       <>
//     <div className="repo__card">
//       <div className="icon">
//         <i class="fab fa-codepen"></i>
//       </div>
//       <div className="repo__info">
//         <h5>{name}</h5>
//         <a href="" className="text_light">
//           Clone now &rarr;
//         </a>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Repo;

