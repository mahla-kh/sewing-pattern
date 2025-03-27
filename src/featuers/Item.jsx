import PropTypes from "prop-types";
import React, { useState } from "react";
import { formatCurrency } from "../hooks/helper";
import { FaRegHeart } from "react-icons/fa";
// import { useMutation } from "@tanstack/react-query";
// import { updateWomen } from "../services/women";
// import Spinner from "../ui/Spinner";

function Item({ item }) {
  const { name, price, imageFront, imageBack } = item;
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  //   const { mutate, isLoading: isUpdating } = useMutation({
  //     mutationFn: ({ id, isItLiked }) => updateWomen({ id, isItLiked }),
  //   });
  //   if (isUpdating) return <Spinner />;
  console.log(item);
  return (
    <div className="flex flex-col relative gap-1 sm:gap-3 w-40 sm:w-60 bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <span
        onClick={() => setIsLiked((like) => !like)}
        className="absolute top-3 left-3 z-0"
      >
        {isLiked ? "❤️" : <FaRegHeart />}
      </span>
      <div
        className="overflow-hidden rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? imageBack : imageFront}
          className="w-full h-auto object-cover transition-opacity duration-300"
          alt={name}
        />
      </div>
      <span className="text-xs uppercase tracking-wide text-gray-500">
        Sewing Pattern
      </span>
      <span className="text-lg font-semibold text-gray-800">{name}</span>
      <span className="text-md font-medium text-blue-600">
        {formatCurrency(price)}
      </span>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
