import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: 800;
  @media (max-width: 640px) {
    display: inline-grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const ControlButtons = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`;

const Button = styled.button`
  background: ${props => (props.secondary ? 'white' : props.theme.darkblue)};
  border-radius: 9999px;
  border-color: ${props => (props.secondary ? props.theme.darkblue : 'white')};
  border-style: solid;
  border-width: 1px;
  color: ${props => (props.secondary ? props.theme.darkblue : 'white')};
  font-weight: 900;
  height: 1.5rem;
  width: 1.5rem;
`;

function toUpperCase(word) {
  const splitWord = word.replace(/([a-z])([A-Z])/g, '$1 $2');
  return splitWord.charAt(0).toUpperCase() + splitWord.slice(1);
}

export default function Controller({ controls, setControls }) {
  return (
    <Controls>
      {Object.keys(controls).map(control => (
        <Fragment key={control}>
          <Control>
            <p>
              {toUpperCase(control)}: {controls[control]}
            </p>
            <ControlButtons>
              <Button
                onClick={() =>
                  setControls({
                    ...controls,
                    [control]: controls[control] + 1
                  })
                }
              >
                +
              </Button>
              {controls[control] > 0 && (
                <Button
                  secondary
                  onClick={() =>
                    setControls({
                      ...controls,
                      [control]: controls[control] - 1
                    })
                  }
                >
                  -
                </Button>
              )}
            </ControlButtons>
          </Control>
        </Fragment>
      ))}
    </Controls>
  );
}

Controller.propTypes = {
  controls: PropTypes.shape({}).isRequired,
  setControls: PropTypes.func.isRequired
};
