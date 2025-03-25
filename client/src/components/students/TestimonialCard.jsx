import React,{useState,useContext} from 'react';
import StarRatings from 'react-star-ratings';
import { AppContext } from '../../context/AppContext';
import { dummyTestimonial } from "../../assets/assets"

const TestimonialCard = (testimonial) => {
   const [rating, setRating] = useState(0)
   const {
     value: { user },
   } = useContext(AppContext)

   console.log("Testimonial Card ***",user)
  return (
    <div>
      <div className="my-4 mx-1 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 p-3 text-black rounded-lg ">
        <div className="bg-indigo-200">
          <img src={""} />
          <div className="flex justify-around items-center">
          <div className="font-thin underline text-xs">name</div>
          <div className="">Jobtitle</div>
          </div>
        </div>
        <div>
          <StarRatings
            rating={rating}
            starRatedColor="Puprle"
            changeRating={(newRating) => {
              setRating(newRating)
            }}
            numberOfStars={Number(5)}
            name="rating"
            starDimension="15px"
            starEmptyColor="rgb(189, 181, 213)"
          />
          <div>Raju</div>
      </div>
        </div>
      </div>

  );
};
export default TestimonialCard;
