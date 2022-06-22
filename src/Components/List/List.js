import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function List({data , getid}) {
    
    return (
        <div>
            {
                data.map((p, i) => {
                    return (
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {p.branding}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    {p.price}
                                </CardSubtitle>
                                <CardText>
                                    {p.colors}
                                </CardText>
                                <Button onClick={()=>getid(p.id)}>Click</Button>
                            </CardBody>
                        </Card>
                    )

                })
            }
        </div>
    );
}

export default List;