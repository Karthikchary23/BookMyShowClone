import React from "react";

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-fall-guy-et00375399-1712039103.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-fall-guy-et00375399-1712039103.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "40rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="absolute z-30 w-64 h-96 left-64 top-10 ">
<img
src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-fall-guy-et00375399-1712039103.jpg"
alt="poster"
className="h-full w-full rounded-xl "
/>
</div>

   <img
     src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-fall-guy-et00375399-1712039103.jpg"
     alt="poster"
     className="w-full h-full"
    />
   </div>
    </>
  )
};

export default MovieHero;
