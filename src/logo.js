import React, {Component} from 'react';
import {Image,Grid, Row, Col } from 'react-bootstrap';
import logo from './images/main-logo.jpg';

class Logo extends Component {
  render(){
    return (
      <Grid className="main-logo" fluid={true}>
        <Row>
            <Col xs={12} md={12} mdPush={3}>
              <Image className="img-responsive" src={logo} alt="Logo" ></Image>
            </Col>
        </Row>
      </Grid>

    );
  }
}

export default Logo;
