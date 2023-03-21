import { Carousel } from "bootstrap";
import "./carsol1.jpg";
import "./carsol2.jpg";
import "./carsol3.jpg";
import "./carausol.css";

export default function Carausol(){
    return (
        <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("./carsol1.jpg")}
              class="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
              <p>...</p>
          </div>
          <div class="carousel-item">
            <img
              src={require("./carsol2.jpg")}
              class="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
    <p>...</p>
          </div>
          <div class="carousel-item">
            <img
              src={require("./carsol3.jpg")}
              class="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
    <p>...</p>
          </div>

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}