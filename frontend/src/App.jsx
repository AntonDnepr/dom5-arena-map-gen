import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { Mods, Steps } from './consts';
import FinalMapComponent from './Components/FinalMapComponent';
import Navigation from './Components/Navigation';

function App() {
  const [nations, setNations] = useState([]);
  const [units, setUnits] = useState([]);
  const [isLoadingNations, setLoadingNations] = useState(false);
  const [isLoadingUnits, setLoadingUnits] = useState(false);
  const [finalMapData, setfinalMapData] = useState('');
  const [currentStep, setCurrentStep] = useState(Steps.Step1);
  const [nationForStep2, setNationForStep2] = useState('');
  const [nationIndex, setNationIndex] = useState(0);
  const [selectedNations, setSelectNations] = useState(['', '', '', '']);
  const setSelectNationsWithIndex = (index) => (value) => {
    const temp = [...selectedNations];
    temp[index] = value;
    setSelectNations(temp);
  };
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

  const lengthOfNations = selectedNations.filter((x) => x !== '').length;
  if (currentStep === Steps.Step2) {
    // eslint-disable-next-line prefer-destructuring
    const selectedNation = selectedNations.filter((x) => x !== '')[nationIndex];
    if (selectedNation !== nationForStep2) {
      setNationForStep2(selectedNation);
    }
  }
  const setGenerateMapRequest = () => {
    const objectToPost = {
      land_nation_1: selectedNations[0],
      land_nation_2: selectedNations[1],
      water_nation_1: selectedNations[2],
      water_nation_2: selectedNations[3],
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
          selectedNations={selectedNations}
          selectLandNations={[setSelectNationsWithIndex(0), setSelectNationsWithIndex(1)]}
          selectWaterNations={[setSelectNationsWithIndex(2), setSelectNationsWithIndex(3)]}
          selectedCaveMap={selectedCaveMap}
          selectCaveMap={selectCaveMap}
          updateSelectedMods={updateSelectedMods}
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
        </>
      )}
      <Navigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        lengthOfNations={lengthOfNations}
        setNationIndex={setNationIndex}
        nationIndex={nationIndex}
        setGenerateMapRequest={setGenerateMapRequest}
        isLoadingUnits={isLoadingUnits}
      />
      {currentStep === Steps.Final && <FinalMapComponent finalMapData={finalMapData} />}
    </Container>
  );
}

export default App;
