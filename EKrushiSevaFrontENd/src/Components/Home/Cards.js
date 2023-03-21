import blog1 from "./blog1.jpg";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.jpg";

export default function Cards() {
  return (
    <section
      class="portfolio"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <div class="container text-center ">
        <h1>LATEST NEWS </h1>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog1}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body ">
                <h4 ass="card-title">
                India’s Agri Products Export Increased By 16% in 2022-23
                </h4>
                <p class="card-text text-left">
                Increased Agricultural Exports creates jobs and income for workers
                 in the production, processing, transportation, and export industries, 
                 as well as increases farmer income.According to the latest data released 
                 by the Ministry of Commerce and Industry, India's agricultural and processed
                  food product exports increased by 16% year on year in the first eight months
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog2}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h5 class="card-title">
                 
                Agriculture budget
                rose 5 times in 9 years to over ₹1.25 lakh crore: PM Modi
                </h5>
                <p class="card-text text-left">
                New Delhi: Prime Minister Narendra Modi on Friday said the Union 
                Budget 2023-24, like in the previous 8-9 years, focuses on the agriculture 
                sector, and steps are being taken in mission mode to become completely self-sufficient
                 in terms of edible oil.
                 “Every Budget in recent years has been called a budget for Gaon, Gareeb and Kisan,"Modi added.
                 </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog3}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h4 class="cards-title">
                Wheat growers fear crop loss as temperature hits above-normal range
                </h4>
                <p class="card-text text-left">
                While the maximum temperatures in Punjab and Haryana have been hovering 
                above normal limits for several days, minimum temperatures too had registered 
                an increase. But for the past two-three days, the minimum temperatures have 
                been hovering close to normal range. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
