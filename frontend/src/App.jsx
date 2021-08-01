import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Steps from './Steps.ts';
import Step1 from './Step1';
import Step2 from './Step2';
import Mods from './consts';
import Step2Button from './Components/Step2Button';
import NextNationButton from './Components/NextNationButton';
import GenerateMapButton from './Components/GenerateMapButton';
import FinalMapComponent from './Components/FinalMapComponent';

function App() {
  const [nations, setNations] = useState([]);
  const [units, setUnits] = useState([]);
  const [isLoadingNations, setLoadingNations] = useState(false);
  const [isLoadingUnits, setLoadingUnits] = useState(false);
  const [finalMapData, setfinalMapData] = useState('');
  const [currentStep, setCurrentStep] = useState(Steps.Step1);
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
  const showNextStep = selectedNationsArray.some((x) => x !== '') && currentStep === Steps.Step1;
  const lengthOfNations = selectedNationsArray.filter((x) => x !== '').length;
  const showNextNation = lengthOfNations > nationIndex + 1;
  if (currentStep === Steps.Step2) {
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
        setCurrentStep(Steps.Final);
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
      {currentStep === Steps.Step1 && (
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
      <Step2Button
        setCurrentStep={setCurrentStep}
      />
      )}
      {currentStep === Steps.Step2 && (
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
      {currentStep === Steps.Final && <FinalMapComponent finalMapData={finalMapData} />}
    </Container>
  );
}

export default App;
