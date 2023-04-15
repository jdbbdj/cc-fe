import styled from "styled-components";
import Typography from "../Typography";

const Container = styled.div`
  height: 17.5px;
  text-align: center;
`;
function Announcement() {
  return (
    <Container className="bg-main-dark dark:bg-main-light">
      <Typography
        classType="text-white dark:text-black"
        type="default-white"
        text="Super deals! Free shipping for orders above P500"
      />
    </Container>
  );
}

export default Announcement;
