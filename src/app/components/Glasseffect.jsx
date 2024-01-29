// // components/GlassEffectCards.js

// import React from 'react';


// const GlassEffectCards = () => {
//   return (
//     <div className="flex justify-around mt-8">
//       <div className="card glass-effect p-1">
    
//         <div className="flex flex-wrap justify-between">
//           <FaHtml5 size={84} className="mb-4" />
//           <IoLogoCss3 size={84} className="mb-4" />
//           <IoLogoJavascript size={84} className="mb-4" />
//           <FaReact size={84} className="mb-4" />
//           <SiTailwindcss size={84} className="mb-4" />
//           <SiMui size={84} className="mb-4" />
//           <SiRedux size={84} className="mb-4" />
//         </div>
        
//       </div>
//     <div className="card glass-effect">Card 2</div>
//     <div className="card glass-effect">Card 3</div>
//   </div>
//   );
// };

// export default GlassEffectCards;
// components/GlassEffectCards.js

import React from 'react';


const GlassEffectCards = () => {
  return (
    <div className="flex flex-col justify-space mt-8">
     
      <div className="card glass-effect p-1">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <FaHtml5 size={84} />
            <p className="text-center">HTML5</p>
          </div>
          <div className="mb-4">
            <IoLogoCss3 size={84} />
            <p className="text-center">CSS3</p>
          </div>
          <div className="mb-4">
            <IoLogoJavascript size={84} />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="mb-4">
            <FaReact size={84} />
            <p className="text-center">React</p>
          </div>
          <div className="mb-4">
            <SiTailwindcss size={84} />
            <p className="text-center">Tailwind CSS</p>
          </div>
          <div className="mb-4">
            <SiMui size={84} />
            <p className="text-center">Material-UI</p>
          </div>
          <div className="mb-4">
            <SiRedux size={84} />
            <p className="text-center">Redux</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Card 2</h2>
      <div className="card glass-effect">Content for Card 2</div>
      <h2 className="text-2xl font-bold mb-4 text-center">Card 3</h2>
      <div className="card glass-effect">Content for Card 3</div>
    </div>
  );
};

export default GlassEffectCards;

