import React from 'react';
import styled from 'styled-components';

const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: 800;
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

export default function Controller({ controls, setControls }) {
  return (
    <Controls>
      <Control>
        <p>Grid Items: {controls.gridItems}</p>
        <ControlButtons>
          <Button
            onClick={() =>
              setControls({ ...controls, gridItems: controls.gridItems + 1 })
            }
          >
            +
          </Button>
          {controls.gridItems > 0 && (
            <Button
              secondary
              onClick={() =>
                setControls({ ...controls, gridItems: controls.gridItems - 1 })
              }
            >
              -
            </Button>
          )}
        </ControlButtons>
      </Control>
      <Control>
        <p>Columns: {controls.columns}</p>
        <ControlButtons>
          <Button
            onClick={() =>
              setControls({ ...controls, columns: controls.columns + 1 })
            }
          >
            +
          </Button>
          {controls.columns > 0 && (
            <Button
              secondary
              onClick={() =>
                setControls({ ...controls, columns: controls.columns - 1 })
              }
            >
              -
            </Button>
          )}
        </ControlButtons>
      </Control>
      <Control>
        <p>Gap: {controls.gap} px</p>
        <ControlButtons>
          <Button
            onClick={() => setControls({ ...controls, gap: controls.gap + 5 })}
          >
            +
          </Button>
          {controls.gap > 0 && (
            <Button
              secondary
              onClick={() =>
                setControls({ ...controls, gap: controls.gap - 5 })
              }
            >
              -
            </Button>
          )}
        </ControlButtons>
      </Control>
    </Controls>
  );
}
