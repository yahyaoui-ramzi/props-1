import React from "react";
import { Card , Button } from "react-bootstrap";
import shampo from "../../shampo yellow.png" ;
import keraa from "../../keraa.png" ;
import plack_cheveux from "../../plack-cheveux.jpg" ;


const data = {    img1 : shampo ,     title1 :"Shampoing " ,     desc1 : "Argan Oil" ,     Price1 : "59,00 dt" ,

img2 : keraa ,     title2 :"keratin " ,     desc2 : "soincapilair" ,     Price2 : "100,00 dt" ,
img3 : plack_cheveux ,     title3 :"plack " ,     desc3 : "hairstyle" ,     Price3 : "180,00 dt" ,

};


const Cards = () => {
  return (
    <div>
        {" "}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img1} />
          <Card.Body>
            <Card.Title>{data.title1}</Card.Title>
            <Card.Text>
              {data.desc1}
            </Card.Text>
            <h1>{data.Price1}</h1>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img2} />
          <Card.Body>
            <Card.Title>{data.title2}</Card.Title>
            <Card.Text>
              {data.desc2}
            </Card.Text>
            <h2>{data.Price2}</h2>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img2} />
          <Card.Body>
            <Card.Title>{data.title2}</Card.Title>
            <Card.Text>
              {data.desc1}
            </Card.Text>
            <h2>{data.Price2}</h2
            >
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img2} />
          <Card.Body>
            <Card.Title>{data.title2}</Card.Title>
            <Card.Text>
              {data.desc1}
            </Card.Text>
            <h1>{data.Price2}</h1>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img3} />
          <Card.Body>
            <Card.Title>{data.title3}</Card.Title>
            <Card.Text>
              {data.desc3}
            </Card.Text>
            <h1>{data.Price3}</h1>
            <Button variant="primary">buy</Button>
          </Card.Body>
        </Card>
</div>
)};

export default Cards ;