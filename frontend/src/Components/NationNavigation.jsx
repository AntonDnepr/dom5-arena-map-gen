import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const NationNavigation = ({ lengthOfNations, setNationIndex, nationIndex }) => (
  <Row>
    {lengthOfNations > nationIndex + 1
    && (
    <Col>
      <Button onClick={() => setNationIndex(nationIndex + 1)}>Configure next nation</Button>
    </Col>
    )}
    {nationIndex > 0
    && (
    <Col>
      <Button onClick={() => setNationIndex(nationIndex - 1)}>Configure previous nation</Button>
    </Col>
    )}
  </Row>
);

NationNavigation.propTypes = {
  lengthOfNations: PropTypes.number.isRequired,
  setNationIndex: PropTypes.func.isRequired,
  nationIndex: PropTypes.number.isRequired,
};

export default NationNavigation;
