import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainCard.component";
import PosterSlider from "../components/posterSlider/posterSlider.component"; // Corrected import
import premierImages from "../components/config/TempPoster.config";
import Herocarousal from "../components/HeroCarousal/Herocarousal.component";

const Homepage = () => {
    return (
        <>
            <Herocarousal/>

           <div className="flex flex-col gap-14 mx-auto w-full">
           <div className="px-20 w-full py-10">
                <div className="container  mx-auto cursor-pointer">
                    <h1 className="text-3xl pb-8 font-bold text-gray-800">Upcoming Movies</h1>
                    <EntertainmentCardSlider  className="pt-8"/>
                </div>
            </div>

            <div className="bg-navCol-200   w-full mx-auto">
                <div className="mx-auto">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
                     alt="premier" className="mx-auto px-24 pt-12" />

                </div>
            
                <PosterSlider images={premierImages} title="Hello" subTitle="every new movie releases" isDark={true}/> {/* Corrected component name */}

          

            </div>
           </div>
            <PosterSlider images={premierImages} title="Hello" subTitle="every new movie releases" isDark={false}/> {/* Corrected component name */}


            
        </>
    );
};

export default Homepage;
