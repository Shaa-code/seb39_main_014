import styled from "styled-components";

const FirstPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;

  .video-section {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .landing-video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 0.4;
  }

  .content-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 80%;
    z-index: 2;

    h1 {
      font-size: 80px;
      color: black;
      white-space: nowrap;
    }

    .body {
      margin-top: 100px;
      margin-bottom: 100px;
      font-size: 30px;
      color: black;
    }
  }
`;

export default FirstPageStyle;
