import React, {Component} from 'react';
import EntryForm from './form.js'
import RTable from './r-table.js'
import {Grid, Row, Col} from 'react-bootstrap';

class MainDiv extends Component {
  constructor(props, context){
    super(props, context);
    this.myCallback = this.myCallback.bind(this)
    this.state = {
      textData: []
    }
  }
  myCallback = (dataFromChild) => {
        console.log(dataFromChild)
        this.setState({
          textData: dataFromChild
        })
  }
  render(){
    return(
      <Grid className="main-div" fluid={true}>
        <Row>
            <Col xs={12} md={6}>
              <EntryForm callBack={this.myCallback} />
            </Col>
            <Col xs={12} md={6}>
              <RTable data={this.state.textData} />
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default MainDiv;
