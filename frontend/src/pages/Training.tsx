import Collapse from "../components/Collapse"
import SingleTraining from "../components/SingleTraining";
import Navbar from "../layout/Navbar"
import type { Training } from "../models/Training";

const training = {
  description: "This is a beginner full-body strength training designed to teach correct movement patterns and build a basic strength foundation.",
  exerciseList: [
    {
      id: 502,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6bIYUcAlaOarOItbSxKAIFITdE9Yvn9RZQ&s",
      name: "Barbell Squat"
    },
    {
      id: 503,
      image: "https://exrx.net/Articulations/Shoulder/BBBenchPress",
      name: "Bench Press"
    },
    {
      id: 504,
      image: "https://exrx.net/Articulations/Shoulder/LatPulldownFront",
      name: "Lat Pulldown"
    },
    {
      id: 505,
      image: "https://exrx.net/Articulations/Shoulder/DBShoulderPress",
      name: "Dumbbell Shoulder Press"
    }
  ],
  id: 752,
  trainingType: "BEGINNER",
  volumeList: [
    {
      id: 502,
      reps: 10,
      sets: 3,
      weight: 40.0
    },
    {
      id: 503,
      reps: 8,
      sets: 3,
      weight: 30.0
    },
    {
      id: 504,
      reps: 10,
      sets: 3,
      weight: 35.0
    },
    {
      id: 505,
      reps: 10,
      sets: 3,
      weight: 12.0
    }
  ]
} satisfies Training;

const training2 = {
  description: "This is a beginner full-body strength training designed to teach correct movement patterns and build a basic strength foundation.",
  exerciseList: [
    {
      id: 502,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6bIYUcAlaOarOItbSxKAIFITdE9Yvn9RZQ&s",
      name: "Barbell Squat"
    },
    {
      id: 503,
      image: "https://exrx.net/Articulations/Shoulder/BBBenchPress",
      name: "Bench Press"
    },
    {
      id: 504,
      image: "https://exrx.net/Articulations/Shoulder/LatPulldownFront",
      name: "Lat Pulldown"
    },
    {
      id: 505,
      image: "https://exrx.net/Articulations/Shoulder/DBShoulderPress",
      name: "Dumbbell Shoulder Press"
    }
  ],
  id: 752,
  trainingType: "ADVANCED",
  volumeList: [
    {
      id: 502,
      reps: 10,
      sets: 3,
      weight: 40.0
    },
    {
      id: 503,
      reps: 8,
      sets: 3,
      weight: 30.0
    },
    {
      id: 504,
      reps: 10,
      sets: 3,
      weight: 35.0
    },
    {
      id: 505,
      reps: 10,
      sets: 3,
      weight: 12.0
    }
  ]
} satisfies Training;

const training3 = {
  description: "This is a beginner full-body strength training designed to teach correct movement patterns and build a basic strength foundation.",
  exerciseList: [
    {
      id: 502,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6bIYUcAlaOarOItbSxKAIFITdE9Yvn9RZQ&s",
      name: "Barbell Squat"
    },
    {
      id: 503,
      image: "https://exrx.net/Articulations/Shoulder/BBBenchPress",
      name: "Bench Press"
    },
    {
      id: 504,
      image: "https://exrx.net/Articulations/Shoulder/LatPulldownFront",
      name: "Lat Pulldown"
    },
    {
      id: 505,
      image: "https://exrx.net/Articulations/Shoulder/DBShoulderPress",
      name: "Dumbbell Shoulder Press"
    }
  ],
  id: 752,
  trainingType: "ELITE",
  volumeList: [
    {
      id: 502,
      reps: 10,
      sets: 3,
      weight: 40.0
    },
    {
      id: 503,
      reps: 8,
      sets: 3,
      weight: 30.0
    },
    {
      id: 504,
      reps: 10,
      sets: 3,
      weight: 35.0
    },
    {
      id: 505,
      reps: 10,
      sets: 3,
      weight: 12.0
    }
  ]
} satisfies Training;

const getColor = (trainingType: string) => {
  switch(trainingType){
    case "BEGINNER":
      return "bg-green-500";
    case "ADVANCED":
      return "bg-yellow-500";
    case "ELITE":
      return "bg-red-500";
    default:
      return ""
  }
}

const Training = () => {
  return (
    <>
    <Navbar></Navbar>
    <Collapse summary="This is some begginer training" bgColor={getColor(training.trainingType)}>
      <SingleTraining training={training} />
    </Collapse>
    <Collapse summary="This is some advanced training" bgColor={getColor(training2.trainingType)}>
      <SingleTraining training={training2} />
    </Collapse>
    <Collapse summary="This is some elite training" bgColor={getColor(training3.trainingType)}>
      <SingleTraining training={training3} />
    </Collapse>
    </>
  )
}

export default Training