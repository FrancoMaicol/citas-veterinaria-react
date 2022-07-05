 const Error = ({mensaje}) => {
   return (
     <div className="bg-red-800 text-white uppercase text-center p-3 mb-3 rounded-md font-bold">
                 <p>{mensaje}</p>
               </div>
   )
 }

 export default Error

// //Formato "children"
//  const Error = ({children}) => {
//   return (
//     <div className="bg-red-800 text-white uppercase text-center p-3 mb-3 rounded-md font-bold">
//                 <p>{children}</p>
//               </div>
//   )
// }
// //Con "children" nos permite agregar mas de un valor a la hora de llamar al prop
// export default Error
 