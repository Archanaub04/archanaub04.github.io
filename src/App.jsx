import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetail from "./components/ProjectDetail";


function App() { 
  return (
    <>
      <Toaster />      
      <BrowserRouter basename="/My-Portfolio/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
