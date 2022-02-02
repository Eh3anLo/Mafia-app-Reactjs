import styled from 'styled-components';
const Line = styled.div`
  position: ${(props) => props.position || 'absolute'};
  display: ${(props) => props.display || 'unset'};
  top: ${(props) => props.top || 'unset'};
  bottom: ${(props) => props.bottom || 'unset'};
  left: ${(props) => props.left || 'unset'};
  transform: translateX(-50%);
  right: ${(props) => props.right || 'unset'};
  background: ${(props) => props.bg || '#d90c0c'};
  border-radius: 15px;
  width: ${(props) => props.width || 'unset'};
  height: ${(props) => props.height || 'unset'};
  box-shadow: 0px 0px 10px 0px ${(props) => props.bg || '#d90c0c'};
  z-index: ${(props) => props.index || 2};
  margin: ${(props) => props.margin || 'unset'};
`;
export default Line;
