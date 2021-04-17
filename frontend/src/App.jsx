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
  const [commanderMagic, setCommanderMagic] = useState({});
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
      { showEditMagic ? (
        <EditMagic
          saveMagicEdit={() => {
            saveMagicEdit(commander.id, selectedCommanders, commanderMagic);
            setshowEditMagic(false);
          }}
          setCommanderMagic={setCommanderMagic}
          commanderMagic={commanderMagic}
        />
      ) : null }
    </div>
  );
};

CommanderRow.propTypes = {
  commander: PropTypes.shape(
    { dominion_id: PropTypes.string, name: PropTypes.string, id: PropTypes.string },
  ).isRequired,
  selectedCommanders: PropTypes.arrayOf(PropTypes.object).isRequired,
  duplicateRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  saveMagicEdit: PropTypes.func.isRequired,
};

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

const Step2 = ({
  selectedNation, selectCommander, selectedCommanders, selectedUnits, selectUnit,
}) => {
  const deleteRow = (uuid, arrayToFilter) => {
    const newSelection = arrayToFilter.filter(
      (obj) => obj.id !== uuid,
    );
    selectCommander(newSelection);
  };

  const duplicateRow = (uuid, arrayToFilter) => {
    const unitToDuplicate = arrayToFilter.find(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const copyOfUnit = { ...unitToDuplicate, id: uuidv4() };
    const newSelection = [...arrayToFilter, copyOfUnit];
    selectCommander(newSelection);
  };

  const saveMagicEdit = (uuid, arrayToFilter, newMagic) => {
    const unitToDuplicate = arrayToFilter.find(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const copyOfUnit = { ...unitToDuplicate, magic: newMagic };
    const foundIndex = arrayToFilter.findIndex(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const newSelection = [...arrayToFilter];
    newSelection[foundIndex] = copyOfUnit;
    selectCommander(newSelection);
  };

  const deleteUnitRow = (uuid, arrayToFilter) => {
    const newSelection = arrayToFilter.filter(
      (obj) => obj.id !== uuid,
    );
    selectUnit(newSelection);
  };

  const duplicateUnitRow = (uuid, arrayToFilter) => {
    const unitToDuplicate = arrayToFilter.find(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const copyOfUnit = { ...unitToDuplicate, id: uuidv4() };
    const newSelection = [...arrayToFilter, copyOfUnit];
    selectUnit(newSelection);
  };

  const saveUnitQuantity = (uuid, arrayToFilter, newQuantity) => {
    const unitToDuplicate = arrayToFilter.find(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const copyOfUnit = { ...unitToDuplicate, quantity: newQuantity };
    const foundIndex = arrayToFilter.findIndex(
      (obj) => obj.id === uuid && obj.for_nation === selectedNation,
    );
    const newSelection = [...arrayToFilter];
    newSelection[foundIndex] = copyOfUnit;
    selectUnit(newSelection);
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
          {selectedCommanders.filter(
            (obj) => obj.for_nation === selectedNation,
          ).map((commander) => (
            <CommanderRow
              key={`${commander.id}`}
              commander={commander}
              selectedCommanders={selectedCommanders}
              duplicateRow={duplicateRow}
              deleteRow={deleteRow}
              saveMagicEdit={saveMagicEdit}
            />
          ))}
        </Col>
        <Col>
          {selectedUnits.filter(
            (obj) => obj.for_nation === selectedNation,
          ).map((unit) => (
            <UnitRow
              key={`${unit.id}`}
              unit={unit}
              selectedUnits={selectedUnits}
              duplicateRow={duplicateUnitRow}
              deleteRow={deleteUnitRow}
              saveUnitQuantity={saveUnitQuantity}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Select commanders</p>
          <UnitSuggestions id="commander" selectUnit={selectCommander} selectedUnits={selectedCommanders} selectedNation={selectedNation} />
        </Col>
        <Col>
          <p>Select units to add to the commanders</p>
          <UnitSuggestions id="unit" selectUnit={selectUnit} selectedUnits={selectedUnits} selectedNation={selectedNation} />
        </Col>
      </Row>
    </>
  );
};

Step2.propTypes = {
  selectedNation: PropTypes.string.isRequired,
  selectCommander: PropTypes.func.isRequired,
  selectedCommanders: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUnit: PropTypes.func.isRequired,
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

const GenerateMapButton = ({ setGenerateMapRequest }) => (
  <Row>
    <Col>
      <Button onClick={() => setGenerateMapRequest()}>Generate map</Button>
    </Col>
  </Row>
);

GenerateMapButton.propTypes = {
  setGenerateMapRequest: PropTypes.func.isRequired,
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
  const [selectedUnits, addUnit] = useState([]);

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
  const setGenerateMapRequest = () => {
    const objectToPost = {
      land_nation_1: selectedLandNation1,
      land_nation_2: selectedLandNation2,
      water_nation_1: selectedWaterNation1,
      water_nation_2: selectedWaterNation2,
      commanders: selectedCommanders,
      units: selectedUnits,
    };
    setLoading(true);
    axios.post('/api/v0/generate-map/', objectToPost)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
      });
  };

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
            selectedUnits={selectedUnits}
            selectUnit={addUnit}
          />
          {showNextNation
          && (
          <NextNationButton
            setNationIndex={setNationIndex}
            nationIndex={nationIndex}
          />
          )}
          {!showNextNation && <GenerateMapButton setGenerateMapRequest={setGenerateMapRequest} />}
        </>
      )}
    </Container>
  );
}

export default App;
