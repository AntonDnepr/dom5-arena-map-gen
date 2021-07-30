import {
  Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const UnitRow = ({
  unit, selectedUnits, duplicateRow, deleteRow, saveUnitQuantity,
}) => (
  <Row>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            (
            {unit.dominion_id}
            )
            {unit.name}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { saveUnitQuantity(unit.id, selectedUnits, e.target.value); }
            }
          value={unit.quantity}
        />
      </InputGroup>
    </Col>
    <Col>
      <Button color="info" onClick={() => duplicateRow(unit.id, selectedUnits)}>Duplicate</Button>
      {' '}
      <Button color="danger" onClick={() => deleteRow(unit.id, selectedUnits)}>Delete</Button>
    </Col>
  </Row>
);

UnitRow.propTypes = {
  unit: PropTypes.shape(
    {
      dominion_id: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      quantity: PropTypes.string,
    },
  ).isRequired,
  selectedUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
  duplicateRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  saveUnitQuantity: PropTypes.func.isRequired,
};

export default UnitRow;
