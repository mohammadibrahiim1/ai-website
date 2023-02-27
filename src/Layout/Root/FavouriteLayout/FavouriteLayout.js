import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import FHeader from "../../../Pages/FHeader/FHeader";
import SignIn from "../../../Pages/SignIn/SignIn";
import Footer from "../../../Shared/Footer/Footer";
// import Tools from "../../../Pages/Tools/Tools";
import Navbar from "../../../Shared/Navbar/Navbar";

const FavouriteLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col lg="12">
            <FHeader></FHeader>
          </Col>

          {user?.uid ? (
            <div>
              <div className=" text-center mt-5">
                <Link className="btn btn-light me-4" to="/favourite/apps">TOOLS</Link>
                <Link className="btn btn-light" to="/favourite/news">NEWS</Link>
              </div>
              <Outlet></Outlet>
            </div>
          ) : (
            <SignIn></SignIn>
          )}

         
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default FavouriteLayout;
