import { BrowserRouter } from "react-router-dom";
import { Header } from "components/header";
import { Router } from "Router";

export function Home() {
  

  return (
    <BrowserRouter>
      <Header />
      <div className="flex justify-center">
        <Router />
      </div>
    </BrowserRouter>
    
  );
}