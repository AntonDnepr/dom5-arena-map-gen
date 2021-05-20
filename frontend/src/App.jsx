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
  nations, isLoading, selectLandNations, selectWaterNations, selectCaveMap, selectedCaveMap,
}) => (
  <>
    <Row>
      <Col>
        <p>To make use of this tool, you need Arena map. You can install one from here:</p>
        <p>
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1404827698" target="_blank" rel="noreferrer nofollow">Arena map</a>
        </p>
        <p>Please support author of the original map.</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>This tool has 2 steps:</p>
        <p>1) Select nations, that will be used in map generation (Current step).</p>
        <p>
          There is no validation, that nations are selected from the same Age.
        </p>
        <p>
          You should select at least 2 nations from the same Age for game
          to not declare you a winner immediately.
        </p>
        <p>
          There is no validation for land/water nation, so please be careful when selecting them.
        </p>
        <p>
          2) One by one, you will be prompt to generate commanders and units
          for the selected nations. You can skip nations if you do not want them
          having anything but starting expansion party
        </p>
        <p>
          You can select map with cave in it to test this specific terrain.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <b>Select cave map?</b>
        <input type="checkbox" value={selectedCaveMap} onChange={() => { selectCaveMap(!selectedCaveMap); }} />
      </Col>
    </Row>
    <br />
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
  selectCaveMap: PropTypes.func.isRequired,
  selectedCaveMap: PropTypes.bool.isRequired,
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
          <p>
            For this step, you should select commanders and units.
            You can skip this if you do not want to add anything to starting troops of the nation;
          </p>
          <p>
            For map to generate correctly,
            you should have at least 1 commander to add additional units to;
          </p>
          <p>
            Some of the commanders and troops have the same name,
            so you should use unit_id to distinguish them;
          </p>
          <p>
            Use
            <a href="https://larzm42.github.io/dom5inspector/" target="_blank" rel="noreferrer nofollow"> modinspector</a>
            {' '}
            to find out unit_id;
          </p>
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

const FinalMapComponent = ({ finalMapData }) => (
  <Row>
    <Col>
      <p>Copy the text below into your Arena.map file</p>
      <div style={{ whiteSpace: 'pre-line' }}>
        {finalMapData}
      </div>
    </Col>
  </Row>
);

FinalMapComponent.propTypes = {
  finalMapData: PropTypes.string.isRequired,
};

function App() {
  const [nations, setNations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [finalMapData, setfinalMapData] = useState('');
  const [currentStep, setCurrentStep] = useState('step1');
  const [nationForStep2, setNationForStep2] = useState('');
  const [nationIndex, setNationIndex] = useState(0);
  const [selectedLandNation1, selectLandNation1] = useState('');
  const [selectedLandNation2, selectLandNation2] = useState('');
  const [selectedWaterNation1, selectWaterNation1] = useState('');
  const [selectedWaterNation2, selectWaterNation2] = useState('');
  const [selectedCommanders, addCommander] = useState([]);
  const [selectedUnits, addUnit] = useState([]);
  const [selectedCaveMap, selectCaveMap] = useState(false);

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
      use_cave_map: selectedCaveMap,
    };
    setLoading(true);
    axios.post('/api/v0/generate-map/', objectToPost)
      .then((response) => {
        setLoading(false);
        setfinalMapData(response.data);
        setCurrentStep('final');
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
        selectedCaveMap={selectedCaveMap}
        selectCaveMap={selectCaveMap}
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
      {currentStep === 'final' && <FinalMapComponent finalMapData={finalMapData} />}
    </Container>
  );
}

export default App;
