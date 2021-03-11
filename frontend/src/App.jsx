import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NationSuggestions from './NationSuggestions';
import UnitSuggestions from './UnitSuggestions';
import uuidv4 from './utils';

const Step1 = ({
  nations, isLoading, selectLandNations, selectWaterNations,
}) => (
  <>
    <Row>
      <Col>
        Select land nations
      </Col>
    </Row>
    <Row>
      <Col>
        Land nation 1:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectLandNations[0]} id="land1" />}
      </Col>
      <Col>
        Land nation 2:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectLandNations[1]} id="land2" />}
      </Col>
    </Row>
    <Row>
      <Col>
        Select water nations
      </Col>
    </Row>
    <Row>
      <Col>
        Water nation 1:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectWaterNations[0]} id="water1" />}
      </Col>
      <Col>
        Water nation 2:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectWaterNations[1]} id="water2" />}
      </Col>
    </Row>
  </>
);

Step1.propTypes = {
  nations: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectLandNations: PropTypes.arrayOf(PropTypes.func).isRequired,
  selectWaterNations: PropTypes.arrayOf(PropTypes.func).isRequired,
};

const NextStepButton1 = ({ setCurrentStep }) => (
  <Row>
    <Col>
      <Button onClick={() => setCurrentStep('step2')}>Show next step</Button>
    </Col>
  </Row>
);

NextStepButton1.propTypes = {
  setCurrentStep: PropTypes.func.isRequired,
};

const EditMagic = ({ uuid, saveMagicEdit }) => (
  <Row>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>F</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>A</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>W</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>E</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>S</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>D</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>N</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>B</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </Col>
    <Col>
      <Button onClick={() => { saveMagicEdit(uuid); }}>Save</Button>
    </Col>
  </Row>
);
EditMagic.propTypes = {
  uuid: PropTypes.string.isRequired,
  saveMagicEdit: PropTypes.func.isRequired,
};

const CommanderRow = ({
  commander, selectedCommanders, duplicateRow, deleteRow,
}) => {
  const [showEditMagic, setshowEditMagic] = React.useState(false);
  const onClick = (param) => setshowEditMagic(!param);

  return (
    <div>
      (
      {commander.dominion_id}
      )
      {commander.name}
      {' '}
      <Button color="secondary" onClick={() => onClick(showEditMagic)}>Edit Magic</Button>
      {' '}
      <Button color="info" onClick={() => duplicateRow(commander.id, selectedCommanders)}>Duplicate</Button>
      {' '}
      <Button color="danger" onClick={() => deleteRow(commander.id, selectedCommanders)}>Delete</Button>
      { showEditMagic ? <EditMagic uuid={commander.id} saveMagicEdit={() => {}} /> : null }
    </div>
  );
};

CommanderRow.propTypes = {
  commander: PropTypes.shape(
    { dominion_id: PropTypes.number, name: PropTypes.string, id: PropTypes.string },
  ).isRequired,
  selectedCommanders: PropTypes.arrayOf(PropTypes.object).isRequired,
  duplicateRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

const Step2 = ({ selectedNation, selectCommander, selectedCommanders }) => {
  const deleteRow = (uuid, arrayToFilter) => {
    const newSelection = arrayToFilter.filter((obj) => obj.id !== uuid);
    selectCommander(newSelection);
  };

  const duplicateRow = (uuid, arrayToFilter) => {
    const unitToDuplicate = arrayToFilter.find((obj) => obj.id === uuid);
    const copyOfUnit = { ...unitToDuplicate, id: uuidv4() };
    const newSelection = [...arrayToFilter, copyOfUnit];
    selectCommander(newSelection);
  };

  const saveMagicEdit = (uuid, arrayToFilter, newMagic) => {
    const unitToDuplicate = arrayToFilter.find((obj) => obj.id === uuid);
    const copyOfUnit = { ...unitToDuplicate, magic: newMagic };
    const newSelection = [...arrayToFilter, copyOfUnit];
    selectCommander(newSelection);
  };

  return (
    <>
      <Row>
        <Col>
          <p>{selectedNation}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedCommanders.map((commander) => (
            <CommanderRow
              key={`${commander.id}`}
              commander={commander}
              selectedCommanders={selectedCommanders}
              duplicateRow={duplicateRow}
              deleteRow={deleteRow}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Select commanders</p>
          <UnitSuggestions id="commander" selectUnit={selectCommander} selectedUnits={selectedCommanders} />
        </Col>
        <Col>
          <p>Select units to add to the commanders</p>
        </Col>
      </Row>
    </>
  );
};

Step2.propTypes = {
  selectedNation: PropTypes.string.isRequired,
  selectCommander: PropTypes.func.isRequired,
  selectedCommanders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

function App() {
  const [nations, setNations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('step1');
  const [nationForStep2, setNationForStep2] = useState('');
  const [nationIndex, setNationIndex] = useState(0);
  const [selectedLandNation1, selectLandNation1] = useState('');
  const [selectedLandNation2, selectLandNation2] = useState('');
  const [selectedWaterNation1, selectWaterNation1] = useState('');
  const [selectedWaterNation2, selectWaterNation2] = useState('');
  const [selectedCommanders, addCommander] = useState([]);

  useEffect(() => {
    if (nations.length < 1 && !isLoading) {
      setLoading(true);
      axios.get('/api/v0/autocomplete/nations/')
        .then((response) => {
          setLoading(false);
          setNations(response.data);
        });
    }
  }, [nations.length, isLoading]);
  const selectedNationsArray = [
    selectedLandNation1, selectedLandNation2, selectedWaterNation1, selectedWaterNation2,
  ];
  const showNextStep = selectedNationsArray.some((x) => x !== '') && currentStep === 'step1';
  const lengthOfNations = selectedNationsArray.filter((x) => x !== '').length;
  const showNextNation = lengthOfNations > nationIndex + 1;
  if (currentStep === 'step2') {
    // eslint-disable-next-line prefer-destructuring
    const selectedNation = selectedNationsArray.filter((x) => x !== '')[nationIndex];
    if (selectedNation !== nationForStep2) {
      setNationForStep2(selectedNation);
    }
  }

  return (
    <Container>
      {currentStep === 'step1' && (
      <Step1
        nations={nations}
        isLoading={isLoading}
        selectLandNations={[selectLandNation1, selectLandNation2]}
        selectWaterNations={[selectWaterNation1, selectWaterNation2]}
      />
      )}
      {showNextStep && (
      <NextStepButton1
        setCurrentStep={setCurrentStep}
      />
      )}
      {currentStep === 'step2' && (
        <>
          <Step2
            selectedNation={nationForStep2}
            selectCommander={addCommander}
            selectedCommanders={selectedCommanders}
          />
          {showNextNation
          && (
          <NextNationButton
            setNationIndex={setNationIndex}
            nationIndex={nationIndex}
          />
          )}
        </>
      )}
    </Container>
  );
}

export default App;
