import {
  Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NationSuggestions from './NationSuggestions';
import Mods from './consts';

function Step1({
  nations,
  isLoading,
  selectLandNations,
  selectWaterNations,
  selectCaveMap,
  selectedCaveMap,
  updateSelectedMods,
}) {
  const [deChecked, setDeChecked] = useState(false);
  const [debugChecked, setDebugChecked] = useState(false);

  return (
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
          <InputGroup size="sm">
            <InputGroupAddon addonType="append">
              <InputGroupText>Select cave map?</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={() => { selectCaveMap(!selectedCaveMap); }}
              value={selectedCaveMap}
              type="checkbox"
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup size="sm">
            <InputGroupAddon addonType="append">
              <InputGroupText>Add Debug Sensei to the lists?</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={() => {
                updateSelectedMods(Mods.DEBUG, !debugChecked); setDebugChecked(!debugChecked);
              }}
              value={debugChecked}
              type="checkbox"
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup size="sm">
            <InputGroupAddon addonType="append">
              <InputGroupText>Add DE units, nations and commanders?</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={() => {
                updateSelectedMods(Mods.DE, !deChecked); setDeChecked(!debugChecked);
              }}
              value={deChecked}
              type="checkbox"
            />
          </InputGroup>
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
}

Step1.propTypes = {
  nations: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectLandNations: PropTypes.arrayOf(PropTypes.func).isRequired,
  selectWaterNations: PropTypes.arrayOf(PropTypes.func).isRequired,
  selectCaveMap: PropTypes.func.isRequired,
  selectedCaveMap: PropTypes.bool.isRequired,
  updateSelectedMods: PropTypes.func.isRequired,
};

export default Step1;
