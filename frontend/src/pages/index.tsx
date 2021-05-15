import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";

export default function Index() {
  const images = [
    "https://http2.mlstatic.com/D_NQ_908753-MLA46001099531_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_983592-MLA45929157221_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_693909-MLA45855486027_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_811211-MLA45996779346_052021-OO.webp",
  ];
  const length = images.length;

  const [current, setCurrent] = useState(0);

  const handleLastImageClick = () =>
    setCurrent((previous) => (previous - 1 >= 0 ? previous - 1 : length - 1));
  const handleNextImageClick = () =>
    setCurrent((previous) => (previous + 1 > length - 1 ? 0 : previous + 1));

  useEffect(() => {
    const interval = setTimeout(() => {
      handleNextImageClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <PageWrapper>
      <Header />
      <Jumbotron>
        <button onClick={handleLastImageClick}>{"<"}</button>
        <img src={images[current]} key={current} />
        <button onClick={handleNextImageClick}>{">"}</button>
      </Jumbotron>

      <ContentWrapper>
        <main>
          <h1>Hello, world!</h1>
        </main>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
`;

const Jumbotron = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    object-fit: contain;
    animation: animate-fade 1s;
  }

  button {
    padding: 1.5rem 1rem;

    position: relative;
    top: 50%;

    visibility: hidden;

    background: var(--white);

    font-size: 2rem;
    color: var(--blue);

    border: none;

    transition: var(--transition);

    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.125);

    &:hover {
      box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.25);
    }

    &:first-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }

    &:last-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }

  @keyframes animate-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    width: 80%;
    max-width: 1200px;
  }
`;
