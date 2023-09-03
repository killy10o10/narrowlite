import Login from "./Pages/Login";
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

} from "react-router-dom"
import Layout from "./components/Layout";
import Page404 from "./Pages/Page404";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
