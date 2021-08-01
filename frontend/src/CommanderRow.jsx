import {
  Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const EditMagic = ({ saveMagicEdit, setCommanderMagic, commanderMagic }) => (
  <Row>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>F</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, fire: e.target.value }); }
            }
          value={commanderMagic.fire || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>A</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, air: e.target.value }); }
            }
          value={commanderMagic.air || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>W</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, water: e.target.value }); }
            }
          value={commanderMagic.water || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>E</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, earth: e.target.value }); }
            }
          value={commanderMagic.earth || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>S</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, astral: e.target.value }); }
            }
          value={commanderMagic.astral || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>D</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, death: e.target.value }); }
            }
          value={commanderMagic.death || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>N</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, nature: e.target.value }); }
            }
          value={commanderMagic.nature || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>B</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, blood: e.target.value }); }
            }
          value={commanderMagic.blood || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Priest</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={
            (e) => { setCommanderMagic({ ...commanderMagic, priest: e.target.value }); }
            }
          value={commanderMagic.priest || ''}
        />
      </InputGroup>
    </Col>
    <Col>
      <Button onClick={() => saveMagicEdit()}>Save</Button>
    </Col>
  </Row>
);
EditMagic.propTypes = {
  saveMagicEdit: PropTypes.func.isRequired,
  setCommanderMagic: PropTypes.func.isRequired,
  commanderMagic: PropTypes.objectOf(PropTypes.string).isRequired,
};

const CommanderRow = ({
  commander, selectedCommanders, duplicateRow, deleteRow, saveMagicEdit,
}) => {
  const [showEditMagic, setshowEditMagic] = React.useState(false);
  const onClick = (param) => setshowEditMagic(!param);
  const [commanderMagic, setCommanderMagic] = useState(commander.magic || {});
  return (
    <>
      <Row>
        <Col xs={1}>
          <img src={`https://larzm42.github.io/dom5inspector/images/sprites/${zeroPad(commander.dominion_id, 4)}_1.png`} alt="Test" />
        </Col>
        <Col xs={2}>
          (
          {commander.dominion_id}
          )
          {commander.name}
        </Col>
        <Col>
          {' '}
          <Button color="secondary" onClick={() => onClick(showEditMagic)}>Edit Magic</Button>
          {' '}
          <Button color="info" onClick={() => duplicateRow(commander.id, selectedCommanders)}>Duplicate</Button>
          {' '}
          <Button color="danger" onClick={() => deleteRow(commander.id, selectedCommanders)}>Delete</Button>
        </Col>
      </Row>
      { showEditMagic && (
        <EditMagic
          saveMagicEdit={() => {
            saveMagicEdit(commander.id, selectedCommanders, commanderMagic);
            setshowEditMagic(false);
          }}
          setCommanderMagic={setCommanderMagic}
          commanderMagic={commanderMagic}
        />
      )}
    </>
  );
};

CommanderRow.propTypes = {
  commander: PropTypes.shape(
    {
      dominion_id: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      magic: PropTypes.objectOf(PropTypes.string),
    },
  ).isRequired,
  selectedCommanders: PropTypes.arrayOf(PropTypes.object).isRequired,
  duplicateRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  saveMagicEdit: PropTypes.func.isRequired,
};

export default CommanderRow;
