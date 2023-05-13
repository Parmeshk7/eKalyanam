import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
        <div className="loading">
            <div></div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.loading {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: grid;
  place-items: center;
  max-width: 100%;
}

.loading > div {
  width: 10vmax;
  height: 10vmax;
  border-bottom: 5px solid rgba(0, 0, 0, 0.719);

  border-radius: 50%;

  animation: loadingRotate 800ms linear infinite;
}

@keyframes loadingRotate {
  to {
    transform: rotateZ(-360deg);
  }
}

`

export default Loader;