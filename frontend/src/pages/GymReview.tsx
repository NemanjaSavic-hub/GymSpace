import React, { useEffect } from "react";
import GymReviewCard from "../components/GymReviewCard"
import { useGyms } from "../hooks/useGyms";
import { useInView } from "react-intersection-observer";
// const gym= {
//   averageRate: 3.6,
//   id: 1,
//   image: "https://teretananis.com/wp-content/uploads/2025/07/DSC03229_compressed-scaled.jpg",
//   location: "Nis",
//   name: "Aura Fitness Centar",
//   reviews: [
//     {
//       dateTime: "06/01/2026 00:41:47",
//       id: 1,
//       rate: 4.0,
//       text: "Great gym with modern equipment and a clean environment. The staff is friendly and always ready to help. Never too crowded, which makes workouts enjoyable.",
//       user: {
//         email: "savic.nemanja.biz@gmail.com",
//         firstname: "Nemanja",
//         id: 1,
//         lastname: "Savic",
//         password: "$2y$12$ioe/3f5KHP5HBiIysRz84OpLhNpPuHQwapDeX4M5ZsHLtMNPq6uA.",
//         username: "savicN"
//       }
//     },
//     {
//       dateTime: "06/01/2026 01:12:43",
//       id: 2,
//       rate: 5.0,
//       text: "Solid gym with all the basic equipment you need. It can get busy during peak hours, but overall it’s a good place to train.",
//       user: {
//         email: "s.savic@gmail.com",
//         firstname: "Stefan",
//         id: 102,
//         lastname: "Savic",
//         password: "$2y$10$ahHNBZc5i3sCc7k7k54hdOQRBY.NMjvfMiOkLUUIdcuB9X2rCpdK6",
//         username: "stefke"
//       }
//     },
//     {
//       dateTime: "09/01/2026 21:50:20",
//       id: 52,
//       rate: 5.0,
//       text: "Awesome gym! Plenty of equipment, great atmosphere, and motivating trainers. Highly recommend.",
//       user: {
//         email: "pajca@gmail.com",
//         firstname: "Pavle",
//         id: 202,
//         lastname: "Petrovic",
//         password: "$2a$12$Jp1dDqVYOiLwFFvvc8VGXOTzfwKXmuUGhnh5SlRf.ft9FsWK8Z2Zy",
//         username: "Paja"
//       }
//     },
//     {
//       dateTime: "09/01/2026 22:05:24",
//       id: 102,
//       rate: 2.0,
//       text: "Equipment was okay, but most machines were broken or in poor condition. Staff didn’t seem very helpful either.",
//       user: {
//         email: "pera@gmail.com",
//         firstname: "Petar",
//         id: 152,
//         lastname: "Petrovic",
//         password: "$2a$12$ARBE7XfLojicinjYfiC78uST6xtWzn0n4aVzSypo/1s2lrI8ovAPK",
//         username: "Pera"
//       }
//     },
//     {
//       dateTime: "09/01/2026 22:14:23",
//       id: 152,
//       rate: 2.0,
//       text: "Nice location, but extremely crowded during peak hours and you often wait for basic equipment",
//       user: {
//         email: "pera@gmail.com",
//         firstname: "Petar",
//         id: 152,
//         lastname: "Petrovic",
//         password: "$2a$12$ARBE7XfLojicinjYfiC78uST6xtWzn0n4aVzSypo/1s2lrI8ovAPK",
//         username: "Pera"
//       }
//     }
//   ]
// };
const GymReview = () => {
  const pageSize = 20;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage} = useGyms({pageSize});
  const { ref: isScrolledToBottomRef, inView: isIntersecting } = useInView();
  useEffect(() => {
    if(isIntersecting){
      console.log("fetching")
      fetchNextPage()
    }
  }, [isIntersecting])
  if(isLoading) return <p>...Loading</p>
  if(error) return <p>{error.message}</p>
  return (
    <>
      <div className="flex flex-col items-center">
        {data?.pages.map(gymResponse => 
        <React.Fragment key={gymResponse.page.number}>
          {gymResponse.content.map( gym => <GymReviewCard key={gym.id} gym={gym}/>)}
        </React.Fragment>)}
        <p ref={isScrolledToBottomRef}>{isFetchingNextPage ? "Loading next page..." : ""}</p>
      </div>
    </>
  )
}

export default GymReview