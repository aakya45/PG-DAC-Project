import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const FamilyFunction = () => {
    const services = [
        {
            id: 1,
            name: "Catering",
            description: "Explore Delicious Food at your fingertip...",
            image: "https://i.pinimg.com/originals/90/6e/79/906e793f78a72be2be037234e9763d9d.jpg",
            link: "/catererui"
        },
        {
            id: 2,
            name: "Music",
            description: "Make youre Event Joyful with our music.....",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPpPCDJpnAEj_Zj82gqqmZ8a-Hww5KJWCnA&usqp=CAU",
            link: "/musicsystemui"
        },

        {
            id: 3,
            name: "mini Hall",
            description: "Venue for your event",
            image: "https://www.platinumbanquet.com/wp-content/uploads/2015/09/DSC_0213-1000x667.jpg",
            link: "/hallui"
        },
        {
            id: 4,
            name: "Photography",
            description: "Capture the Precious Moments",
            image: "https://www.leisurebyte.com/wp-content/uploads/2021/01/photographer.jpg",
            link: "/photographyui"
        },

        {
            id: 5,
            name: "Firecrackers",
            description: "Any celebration is incomplete these...",
            image: "https://s.yimg.com/uu/api/res/1.2/PfyUv9xuSbSWpk7eXmsMAA--~B/aD0xMzM5O3c9MjIzNztzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en_us/News/ap_webfeeds/12750c6ca6981716180f6a7067008aec.jpg",
            link: "/firecrackersui"
        },

        {
            id: 6,
            name: "PoojaVidhi",
            description: "Events need a spiritual upbringing...",
            image: "https://images.news18.com/ibnlive/uploads/2020/11/1605074723_diwali.jpg",
            link: "/poojavidhiui"
        },
        {
            id: 7,
            name: "Transportation",
            description: "necessary for moving around...",
            image: "https://paylessvans.com/wp-content/uploads/2015/08/turistas2.png",
            link: "/transportationui"
        },
        {
            id: 8,
            name: "WaterSupply",
            description: "Water is life and we require it at events to provide it to number of guests...",
            image: "https://english.cdn.zeenews.com/sites/default/files/2020/04/15/854918-drinking-water.gif",
            link: "/watersupplyui"
        },
    
        {
            id: 9,
            name: "Decoration",
            description: "Decoration is must in events...",
            image: "https://i.pinimg.com/originals/01/69/81/016981fa6da048c00ac740e563ba8c85.jpg",
            link: "/decorationui"
        },

        // add more services here
    ];

    // get the services for the current page
    const getPageServices = () => {
        const startIndex = 0;
        const endIndex = startIndex + 9;
        return services.slice(startIndex, endIndex);
    };

    // render the services for the current page
    const renderServices = () => {
        return getPageServices().map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
                <Card>
                    <CardImg top width="100%" src={service.image} alt={service.name} />
                    <CardBody>
                        <CardTitle tag="h5">{service.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{service.description}</CardSubtitle>
                        <Button color="primary" href={service.link}>View Service</Button>
                    </CardBody>
                </Card>
            </Col>
        ));
    };

    
    return (
        <Container>
            <div>
                <h1>              Family Functions...</h1>
            </div>
            <Row>
                {renderServices()}
            </Row>
           
        </Container>
    );
};

export default FamilyFunction;
