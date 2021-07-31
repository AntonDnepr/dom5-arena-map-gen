import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Mods from './consts';

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
      <p>Copy the text below into a backup of Arena.map file</p>
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
  const [units, setUnits] = useState([]);
  const [isLoadingNations, setLoadingNations] = useState(false);
  const [isLoadingUnits, setLoadingUnits] = useState(false);
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
  const [selectedMods, selectMod] = useState([Mods.VANILLA]);

  useEffect(() => {
    setLoadingNations(true);
    setLoadingUnits(true);
    axios.get(`/api/v0/autocomplete/units/?modded=${selectedMods.join(',')}`)
      .then((response) => {
        setLoadingUnits(false);
        setUnits(response.data);
      }).catch((error) => {
        console.log('Error', error);
        return [];
      });
    axios.get(`/api/v0/autocomplete/nations/?modded=${selectedMods.join(',')}`)
      .then((response) => {
        setLoadingNations(false);
        setNations(response.data);
      }).catch((error) => {
        console.log('Error', error);
        return [];
      });
  }, [selectedMods]);
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
    setLoadingNations(true);
    axios.post('/api/v0/generate-map/', objectToPost)
      .then((response) => {
        setLoadingNations(false);
        setfinalMapData(response.data);
        setCurrentStep('final');
      }).catch((error) => {
        console.log('Error', error);
        return [];
      });
  };

  const updateSelectedMods = (valueType, value) => {
    if (value && !selectedMods.includes(valueType)) {
      selectMod([...selectedMods, valueType]);
    } else if (!value && selectedMods.includes(valueType)) {
      const removeIndex = selectedMods.indexOf(valueType);
      const arrayCopy = selectedMods.slice();
      arrayCopy.splice(removeIndex, 1);
      selectMod(arrayCopy);
    }
  };

  return (
    <Container>
      {currentStep === 'step1' && (
      <Step1
        nations={nations}
        isLoading={isLoadingNations}
        selectLandNations={[selectLandNation1, selectLandNation2]}
        selectWaterNations={[selectWaterNation1, selectWaterNation2]}
        selectedCaveMap={selectedCaveMap}
        selectCaveMap={selectCaveMap}
        updateSelectedMods={updateSelectedMods}
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
            units={units}
            isLoading={isLoadingUnits}
            selectedNation={nationForStep2}
            selectCommander={addCommander}
            selectedCommanders={selectedCommanders}
            selectedUnits={selectedUnits}
            selectUnit={addUnit}
            selectedMods={selectedMods}
          />
          {showNextNation && !isLoadingUnits
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
