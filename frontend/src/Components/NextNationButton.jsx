import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const NextNationButton = ({ setNationIndex, nationIndex }) => (
  <Row>
    <Col>
      <Button onClick={() => setNationIndex(nationIndex + 1)}>Configure next nation</Button>
    </Col>
  </Row>
);

NextNationButton.propTypes = {
  setNationIndex: PropTypes.func.isRequired,
  nationIndex: PropTypes.number.isRequired,
};

export default NextNationButton;
