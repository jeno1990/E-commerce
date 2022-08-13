import styled from "styled-components";

const Announce = styled.div`
display: flex;
color: white;
  background-color: teal;
  font-size: 20px;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Announcment = () => {
  return <Announce>this is the announcment location</Announce>;
};

export default Announcment;
