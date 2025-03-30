import React,{useState,useContext} from 'react';
import StarRatings from 'react-star-ratings';
import { AppContext } from '../../context/AppContext';

const TestimonialCard = ({testimonial}) => {
   const [rating, setRating] = useState(0)
   const [readMore,setReadMore]=useState(false)
   const {
     value: { user },
   } = useContext(AppContext)

  console.log("Testimonial Card ***",user)
  return (

      <div className="my-4 mx-1 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 bg-opacity-50 p-3 text-black rounded-2xl ">
        <div className="bg-indigo-200">
          <img src={""} />
          <div className="flex flex-col justify-around items-center">
          <div>{testimonial.name}</div>
          <div className="font-thin underline text-xs">{testimonial.role}</div>
          </div>
        </div>
        {(!readMore && <div>{testimonial.feedback.slice(50) }<span className='text-blue-700'
        onClick={()=>{
          console.log("Read more clicked")
          setReadMore(state=>!state)}}
          ><br/> <div className="mt-5">Read More ... </div></span>
        </div>)}
        {(readMore && <div>{testimonial.feedback}
        <span className='text-blue-700'
          onClick={() => {
            console.log("Span is clicked")
            setReadMore(state=>!state) }}
          > <div className="mt-5"> Shorten...</div> </span>
        </div>)}
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
          </div>
        </div>
  );
};
export default TestimonialCard;
