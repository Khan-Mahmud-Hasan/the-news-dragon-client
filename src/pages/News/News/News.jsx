import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Title className='text-center'>
                    {title}
                </Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All News in Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;