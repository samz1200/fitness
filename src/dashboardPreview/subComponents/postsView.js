import '../css/subComponents/postsView.css'
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import handle2 from '../../images/handle2.jpg'

const PostView = () => {
    return (
        <div>
            <h1 style={{ margin: "2rem 0" }}>Posts {"&"} Projects</h1>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
            <Card >
                <Card.Img style={{ height: "15rem", objectFit: "cover" }} variant="top" src={handle2} />
                <Card.Body>
                    <div className="postImageDiv">
                        <img src={handle2} className="postImage" />
                        <p>Syed Ali Hassan</p>
                    </div>
                    <Card.Title>title</Card.Title>
                    <Card.Text>
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                        ssumenda nam repudiandae rerum fugiat vel maxime.
                    </Card.Text>
                    {/* <Link to="/productlisting">
                        <Button variant="primary">Product Detail</Button>
                    </Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostView;