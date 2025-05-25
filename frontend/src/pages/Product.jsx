import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-32 gap-2">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-24 h-24 sm:w-full sm:h-32 object-contain border p-2 rounded-lg cursor-pointer hover:border-green-500 transition-colors"
                alt="Tech product thumbnail"
              />
            ))}
          </div>
          <div className="w-full sm:w-[calc(100%-8rem)]">
            <img 
              className="w-full h-96 object-contain bg-gray-50 p-8 rounded-xl border" 
              src={image} 
              alt={productData.name} 
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
          
          <div className="flex items-center gap-2 text-lg">
            <span className="text-green-600 font-bold">{currency}{productData.price.toFixed(2)}</span>
            {productData.originalPrice && (
              <span className="text-gray-400 line-through">{currency}{productData.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {productData.description.split(',').map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}
                <br />
              </React.Fragment>
            ))}
          </p>

          <button
            // onClick={() => addToCart(productData._id)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <a href="https://wa.me/2348118532900">
            BUY
            </a>
          </button>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>1-2 Year Manufacturer Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>Free Technical Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              <span>14-Day Return Policy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Shipping & Delivery</h3>
          <div className="space-y-2 text-gray-600">
            <p>• Lagos: 1-2 business days (₦5,000)</p>
            <p>• Other States: 3-5 business days (₦15,000)</p>
            <p>• Express Delivery Available (+₦10,000)</p>
            <p>• Free In-Store Pickup</p>
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Support & Services</h3>
          <div className="space-y-2 text-gray-600">
            <p>• Free Device Setup Guide</p>
            <p>• Extended Warranty Options</p>
            <p>• Data Transfer Assistance</p>
            <p>• 24/7 Technical Support</p>
          </div>
        </div>
      </div>

      <RelatedProducts 
        category={productData.category} 
        currentProductId={productData._id} 
      />
    </div>
  ) : (
    <div className="text-center py-24">
      <p className="text-gray-500">Loading product details...</p>
    </div>
  );
};

export default Product;

























// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('');

//   const fetchProductData = async () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Product Data */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Product Images */}
//         <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-32 gap-2">
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className="w-24 h-24 sm:w-full sm:h-32 object-contain border p-2 rounded-lg cursor-pointer hover:border-green-500 transition-colors"
//                 alt="Tech product thumbnail"
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[calc(100%-8rem)]">
//             <img 
//               className="w-full h-96 object-contain bg-gray-50 p-8 rounded-xl border" 
//               src={image} 
//               alt={productData.name} 
//             />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1 space-y-6">
//           <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
          
//           <div className="flex items-center gap-2 text-lg">
//             <span className="text-green-600 font-bold">{currency}{productData.price.toFixed(2)}</span>
//             {productData.originalPrice && (
//               <span className="text-gray-400 line-through">{currency}{productData.originalPrice.toFixed(2)}</span>
//             )}
//           </div>

//           <p className="text-gray-600 leading-relaxed">{productData.description}</p>

//           <button
//             onClick={() => addToCart(productData._id)}
//             className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
//           >
//             BUY
//           </button>

//           <div className="space-y-4 pt-4 border-t">
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//               <span>1-2 Year Manufacturer Warranty</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//               <span>Free Technical Support</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//               <span>14-Day Return Policy</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tech Specs Section */}
//       {/* <div className="mt-16 border rounded-xl overflow-hidden">
//         <div className="bg-gray-50 px-6 py-4 border-b">
//           <h3 className="text-lg font-semibold">Technical Specifications</h3>
//         </div>
//         <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {productData.specs?.map((spec, index) => (
//             <div key={index} className="space-y-1">
//               <span className="text-sm text-gray-500">{spec.key}</span>
//               <p className="font-medium">{spec.value}</p>
//             </div>
//           ))}
//         </div>
//       </div> */}

//       {/* Shipping & Support */}
//       <div className="mt-12 grid md:grid-cols-2 gap-8">
//         <div className="border rounded-xl p-6">
//           <h3 className="text-lg font-semibold mb-4">Shipping & Delivery</h3>
//           <div className="space-y-2 text-gray-600">
//             <p>• Lagos: 1-2 business days (₦5,000)</p>
//             <p>• Other States: 3-5 business days (₦15,000)</p>
//             <p>• Express Delivery Available (+₦10,000)</p>
//             <p>• Free In-Store Pickup</p>
//           </div>
//         </div>

//         <div className="border rounded-xl p-6">
//           <h3 className="text-lg font-semibold mb-4">Support & Services</h3>
//           <div className="space-y-2 text-gray-600">
//             <p>• Free Device Setup Guide</p>
//             <p>• Extended Warranty Options</p>
//             <p>• Data Transfer Assistance</p>
//             <p>• 24/7 Technical Support</p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts 
//         category={productData.category} 
//         currentProductId={productData._id} 
//       />
//     </div>
//   ) : (
//     <div className="text-center py-24">
//       <p className="text-gray-500">Loading product details...</p>
//     </div>
//   );
// };

// export default Product;





















// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('');

//   const fetchProductData = async () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* Product Data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* Product Images */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt="luxury watch brand"
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} alt="" />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           {/* <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//             <p className="pl-2">(122)</p>
//           </div> */}
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 text-gray-500 md:w-4/5 pb-3">{productData.description}</p>
//           <button
//             onClick={() => addToCart(productData._id)}
//             className="border border-white text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-[#333333]"
//           >
//             BUY
//           </button>
//           <hr className="mt-8 sm:w-4/5" />
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Description & Review Section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border px-5 py-3 text-sm">Information</b>
//           {/* <p className="border px-5 py-3 text-sm">Reviews (122)</p> */}
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>
//             All Watches are shipped overnight through FedEx and fully insured <br></br>
            
//           </p>
//           <p>
//             Payment Options: Online Payment, Cash On Delivery
//           </p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;
