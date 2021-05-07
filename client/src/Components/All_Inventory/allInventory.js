import React,{useEffect, useState} from 'react';
import "./allInventory.css"
import firebase from "../../Firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllInventory = () => {
    const [allInventory, setAllInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("inventory");

    const getAllInventory = ()=>{
    setLoading(true);
    ref.onSnapshot( (querySnapshot) => {
        const items = [];
        querySnapshot.forEach( (doc) =>{
        items.push(doc.data());
        });
        setAllInventory(items[0]);
        setLoading(false);
    })
    }
    useEffect( ()=>{
    getAllInventory();
    }, [])

    if (loading){
    return <h1>Loading...</h1>
    }
    return (
    <Container fluid className="w-90 mx-auto">
        <h1 className="text-center my-4"> All Inventory</h1>
   
        {Object.keys(allInventory).map( (collection_key, index)=>{
            const inventory_object = allInventory[collection_key];
            const category = collection_key.replace("_", " ");

            return (
                <Container fluid key={index} className="my-4">
                    <h1 className="text-capitalize m-0">{category}</h1>
                    <Container fluid key={index} className="pt-1 mx-2">
                        {Object.keys(inventory_object).map( (key, i) => {
                            const rental_item = key.replace("_", " ");
                            // Each Rental Item is represented in a row
                            return(
                                <Row key={i} className="my-2"> 
                                    <Col xl={4} className="text-capitalize"> 
                                        {rental_item}
                                    </Col>
                                    <Col xl={6}> 
                                        {inventory_object[key].price} 
                                    </Col>
                                </Row>
                            )
                        })}
                    </Container>
                </Container>
            )
        })}
     
    </Container>
    );
}

export default AllInventory;