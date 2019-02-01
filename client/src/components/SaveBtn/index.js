import React from "react";
import "./style.css";



// // Destructuring the type, className, children and onClick props, applying them to the button element
// function Button({ type = "default", className, children, onClick }) {
//   return (
//     <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
//       {children}
//     </button>
//   );
// }

// export default Button;

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0" >
      save
    </span>
  );
}

export default SaveBtn;
