import React, { useLayoutEffect, useState, useEffect }from "react";

import { Card, Button } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'
import * as styles from "../styles/carousel.module.css";
import DualBed from "../images/dualBed.jpeg";
import HotelRoom from "../images/hotelRoom.jpeg";
import SmallAp from "../images/smallAp.jpeg";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export default function CarouselComponent() {
  const [carouselItems, setCarouselItems] = useState(2);
  const [width] = useWindowSize();

  useEffect(() => {
    if(width <= 995) {
      setCarouselItems(1);
    } else {
      setCarouselItems(2);
    }
  }, [carouselItems, width])
  
  return (
      <div className={styles.sliderDiv}>
        <Carousel itemsToShow={carouselItems}>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={DualBed} alt="Hostel Room"/>
              <Card.Body>
                <Card.Title>Hostel Room</Card.Title>
                <Card.Text>
                Low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen.
                </Card.Text>
                  <Button href="https://wa.me/+447577081227?text=I'd%20like%20in%20to%20get%20a%20room!" target="_blank" variant="info">Contact us</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={HotelRoom} alt="Hotel Room" />
              <Card.Body>
                <Card.Title>Shared accommodation</Card.Title>
                <Card.Text>
                 We can offer you a very confy room in a house or flat and share other rooms like the living area, kitchen and sometimes the bathroom.
                </Card.Text>
                <Button href="https://wa.me/+447577081227?text=I'd%20like%20in%20to%20get%20a%20room!" target="_blank"  variant="info">Contact us</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={SmallAp} />
              <Card.Body>
                <Card.Title>Small Apartment/Studio</Card.Title>
                <Card.Text>
                We offer different opportunities for renting or sharing a small apartment/studio.                </Card.Text>
                <Button href="https://wa.me/+447577081227?text=I'd%20like%20in%20to%20get%20a%20room!" target="_blank"  variant="info">Contact us</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </div>
  );
}