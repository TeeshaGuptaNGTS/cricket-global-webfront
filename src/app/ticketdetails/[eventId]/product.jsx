"use client";

export default function ProductDetails({ product, onAdd, onSelect }) {
  if (!product) return null;

  return (
    <div className="w-full p-3 md:p-4 border rounded-xl bg-white shadow-sm flex items-center gap-3 bg-gradient-to-t from-[#e8ebf0] to-[#f3f5f8] border-gray-300">

      {/*  Product Image */}
      <img
        src={product.coverImage}
        alt={product.name}
        className="
          w-14 h-14                      /*  Mobile size */
          md:w-20 md:h-20                /*  Desktop size */
          rounded-lg object-cover border
        "
      />

      {/*  Text Section */}
      <div className="flex-1">
        <h2 className="text-sm md:text-lg font-semibold text-gray-900">
          {product.name}
        </h2>

        <p className="text-xs md:text-sm text-gray-700 font-medium">
          ₹{product.price}
        </p>

        <p className="text-[10px] md:text-xs text-gray-500">
          {product.category}
        </p>

        <p className="text-[10px] md:text-xs text-gray-500">
          {product.brandName}
        </p>
      </div>

      {/*  Buttons Right Side */}
      <div className="flex flex-col gap-2">

        <button
        onClick={() => {
                  onAdd()
                  onSelect()
                }}
         
          className="
            px-2 py-[2px]                 
            md:px-4 md:py-1               
            bg-green-600 text-white 
            text-[10px] md:text-xs        
            rounded-md hover:bg-green-700
            transition cursor-pointer
          "
        >
          Add
        </button>

       
      </div>

    </div>
  );
}
