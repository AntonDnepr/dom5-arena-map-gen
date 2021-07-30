import {
  Row, Col,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import UnitSuggestions from './UnitSuggestions';
import CommanderRow from './CommanderRow';
import UnitRow from './UnitRow';
import uuidv4 from './utils';

const Step2 = ({
  selectedNation, selectCommander, selectedCommanders, selectedUnits, selectUnit, selectedMods,
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
          <UnitSuggestions
            id="commander"
            selectUnit={selectCommander}
            selectedUnits={selectedCommanders}
            selectedNation={selectedNation}
            selectedMods={selectedMods}
          />
        </Col>
        <Col>
          <p>Select units to add to the commanders</p>
          <UnitSuggestions id="unit" selectUnit={selectUnit} selectedUnits={selectedUnits} selectedNation={selectedNation} selectedMods={selectedMods} />
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
  selectedMods: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Step2;
