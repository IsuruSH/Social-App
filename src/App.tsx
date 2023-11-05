import Navbar from "@/scenes/navbar"
import { useState } from "react";
import { SelectedPage } from "@/scenes/shared/type";

function App() {
  const [selectedPage, setSelectedPage] =  useState<SelectedPage>(SelectedPage.Home);
  return (
  <div className="app bg-gray-20">
    <Navbar
      page="Benifits"
      selectedPage = {selectedPage}
      setSelectedPage = {setSelectedPage} 
    />
  </div>
  );
}

export default App;
