import React from "react";

export default function StarRatingOnclick() {
  const totalStars = 5;
  const activeStars = 3;
  return (<>
  {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? (<span className="star">&#9733;</span>) : (<span>☆</span>)
      })}</>);
}





// import React, { useState } from "react";
// import "./StarRating.css";

// const StarRatingOnclick = () => {
//     const [rating, setRating] = useState(2);
//     const [hover, setHover] = useState(0);
//     console.log('rating', rating)
//     return (
//       <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//           index += 1;
//           return (
//             <button
//               type="button"
//               key={index}
//               className={index <= (hover || rating) ? "on" : "off"}
//               // onClick={() => setRating(index)}
//               // onMouseEnter={() => setHover(index)}
//               // onMouseLeave={() => setHover(rating)}
//             >
//               <span className="star">&#9733;</span>
//             </button>
//           );
//         })}
//       </div>
//     );
//   };

// export default StarRatingOnclick;


//Proper Run
// import React from "react";

// const Star = ({ marked, starId }) => {
//   return (
//     <span data-star-id={starId} className="star" role="button">
//       {marked ? '\u2605' : '\u2606'}
//     </span>
//   );
// };

// const StarRatingOnclick = ({ value }) => {
//   const [rating, setRating] = React.useState(parseInt(value) || 0);
//   const [selection, setSelection] = React.useState(0);

//   console.log('rating',rating)

//   const hoverOver = event => {
//     let val = 0;
//     if (event && event.target && event.target.getAttribute('data-star-id'))
//       val = event.target.getAttribute('data-star-id');
//     setSelection(val);
//   };
//   return (
//     <div
//       onMouseOut={() => hoverOver(null)}
//       onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
//       onMouseOver={hoverOver}
//     >
//       {Array.from({ length: 5 }, (v, i) => (
//         <Star
//           starId={i + 1}
//           key={`star_${i + 1}`}
//           marked={selection ? selection >= i + 1 : rating >= i + 1}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarRatingOnclick;