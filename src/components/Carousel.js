import Carousel from 'react-bootstrap/Carousel';
import "../styles/carousel.css"


function Carouselreact() {
  return (
    <div >
    <Carousel data-bs-theme="dark" >
      <Carousel.Item className='carousel-parent'>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/006/560/561/original/4-april-sale-poster-or-banner-with-4-over-on-product-podium-scene-april-4-sales-banner-template-design-for-social-media-and-website-special-offer-sale-50-off-campaign-or-promotion-free-vector.jpg"
          alt="First slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='carousel-content'>
          <h5>Sale</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-parent'>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/ukMkOaoTeBvwdruWqJbiYuTmnuJ8OYxejAt4qeuCVH0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Z3JlZW4tdC1zaGly/dC5qcGc_d2lkdGg9/MTIwMCZmb3JtYXQ9/cGpwZyZleGlmPTEm/aXB0Yz0x"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='carousel-content'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-parent'>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/LvdiBV3RZ4y8NfBvRSlIS3tgZ8JXpkd_Jep77N18v9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L3ByZXZpZXdzL2M3/OC9tYWNib29rLXBy/b2R1Y3Qtc2hvdC0x/LTE1NzQxNjguanBn"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='carousel-content'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carouselreact;