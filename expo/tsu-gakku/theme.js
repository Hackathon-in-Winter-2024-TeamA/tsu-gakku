// import tw from 'twrnc';

// lib/tailwind.js
import { create } from 'twrnc';

// create the customized version...
const tw = create(require(`./tailwind.config.js`)); // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw;




// const { tailwind } = tw.create({
//     theme: {
//       colors: {
//         'brand-color': '#FEDA30',
//         'second-color': '#FFF8D7',
//         'black': '#0F0F0F',
//         'gray': '#4A4A4A',
//         'light-gray': '#BCB7B7',
//         },
//     },
// });

// export { tailwind };