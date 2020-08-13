import React from 'react'
import { Carousel } from 'react-bootstrap'
const CarouselDetail = ({ img1, img2, img3 }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    width="800"
                    height="600"
                />
                <Carousel.Caption>
                    <h3>First image</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            {!!img2 && <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    width="800"
                    height="600"
                />
                <Carousel.Caption>
                    <h3>Second image</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            }
            {!!img3 && <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    width="800"
                    height="600"
                />

                <Carousel.Caption>
                    <h3>Third image</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            }
        </Carousel>
    )
}
export default CarouselDetail
