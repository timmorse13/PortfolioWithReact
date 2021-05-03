import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css'

function Project() {
    return (
    <div className="projectcards row col-12" style={{textAlign: "center"}}>
        <div className="">
        <Card style={{ width: '28rem' }}>
            <Card.Body>
            <iframe width="400" height="407" src="https://www.youtube.com/embed/cesHmQdr290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Title>GoodDeez Delivery Service</Card.Title>
                <Card.Text>
                This app was built using SQL database, handlebars, and Javascript. It incorporated front-end and back-end programming, as well as pulling products from an external API. It functions as an online store where consumers can purchase cannabis products.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><a href="https://rocky-castle-10340.herokuapp.com/homepage" target="_blank">Link to Project</a></ListGroupItem>
                <ListGroupItem><a href="https://github.com/timmorse13/goodies-delivery-service" target="_blank">Link to GitHub Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        <div>
        <Card style={{ width: '28rem' }}>
            <Card.Body>
            <Card.Img variant="top" src="assets/images/wwt.jpg" />
                <Card.Title>We Want Travel!</Card.Title>
                <Card.Text>
                This app was created to act as a centralized site where users could easily access lodging accomodations, top rated restaurants and the 5 day forecast for a desired city.               
                 </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>APIs used: Hotels.com, Yelp.com and Openweathermaps.org</ListGroupItem>
                <ListGroupItem><a href="https://cmorris91.github.io/group-project-1/" target="_blank">Link to project</a></ListGroupItem>
                <ListGroupItem><a href="https://github.com/cmorris91/group-project-1" target="_blank">Link to Github Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        <div>
        <Card style={{ width: '28rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/TGEKPMtqIVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Title>Star Wars: Holodex</Card.Title>
                <Card.Text>
                    We created this React app to act as a fun way to access a database that contained Star Wars characters and planets. We pulled all the information from an external API, seeded a SQL database, and created relationships between characters and planets so that when a planet was selected, the characters assigned to those planets would render. 
                                     </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Technologies used: React, Bootstrap, SQL, Javascript, Axios, React Router</ListGroupItem>
                <ListGroupItem><a href="https://shielded-savannah-30598.herokuapp.com/" target="_blank">Link to project</a></ListGroupItem>
                <ListGroupItem><a href="https://github.com/timmorse13/holomap" target="_blank">Link to Github Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        <div>
        <Card style={{ width: '28rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/TIZvIdIHG_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <Card.Title>Workout Tracker</Card.Title>
                <Card.Text>
                    This site was developed in order to track workouts. The dashboard tracks the most recent workouts performed. 
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Technologies used: Javascript, MongoDB, Express, Path</ListGroupItem>
                <ListGroupItem><a href="https://github.com/timmorse13/workout-tracker" target="_blank">Link to Github Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        <div>
        <Card style={{ width: '28rem' }}>
            <Card.Body>
            <iframe width="400" height="315" src="https://www.youtube.com/embed/6Nw_V91Z3Ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                <Card.Title>Team Profile Creator</Card.Title>
                <Card.Text>
                    This app was designed as a way to easily create an employee database via prompts in the terminal. 
                 </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Technologies used: Javascript, Tests via Jest </ListGroupItem>
                <ListGroupItem><a href="https://github.com/timmorse13/Team-profile-creator" target="_blank">Link to Github Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>TechBlog</Card.Title>
                <Card.Text>
                    This website was created as a message board in order for people to discuss technologies.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Technologies used: Handlebars, Javascript, SQL</ListGroupItem>
                <ListGroupItem><a href="https://github.com/timmorse13/techblog" target="_blank">Link to Github Repository</a></ListGroupItem>
            </ListGroup>
        </Card>
        </div>
    </div>
    );
}

export default Project;