import { Router } from "react-router-dom";
import Cards from "./Cards";
import Carausol from "../Carosol/Carausol";
import Footer from "./Footer";
import Header from "./Header";


export default function Home(){
    return (
        <>    
        <Header></Header>
        <Carausol></Carausol>
       <Cards></Cards>
        <Footer />

        </>
  );
}
