import { useReducer } from "react"
import UserContext from "./contexts.ts/UserContext"
import type { User } from "./models/User"
import userReducer from "./reducers/userReducer"
import { RouterProvider } from "react-router-dom";
import router from "./routing/router";

function App() {
  const [user, dispatch] = useReducer(userReducer, {} as User);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App
