
const hero = () => {
  return (
    <div>
      <section id="left">
        <h1>
            YOUR FEET DESERVE THE BEST
        </h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="cta">
            <button id="primary">Shop Now</button>
            <button id="secondary">Category</button>
        </div>

        <div className="bottom-section">
            <p>Also Available on</p>
            <img src="./images/amazon.png" alt="amazon" />
            <img src="./images/flipkart.png" alt="flipkart" />
        </div>
      </section>
      <section id="right">
        <img src="./images/hero-image.png" alt="hero-img" />
      </section>
    </div>
  )
}

export default hero
