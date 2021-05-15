import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomepageCarrousel() {
  const images = [
    "https://http2.mlstatic.com/D_NQ_908753-MLA46001099531_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_983592-MLA45929157221_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_693909-MLA45855486027_052021-OO.webp",
    "https://http2.mlstatic.com/D_NQ_811211-MLA45996779346_052021-OO.webp",
  ];

  const length = images.length;

  const [current, setCurrent] = useState(0);
  const [animationClass, setAnimationClass] = useState("next");

  const handleLastImageClick = () => {
    setAnimationClass("last");
    setCurrent((previous) => (previous - 1 >= 0 ? previous - 1 : length - 1));
  };

  const handleNextImageClick = () => {
    setAnimationClass("next");
    setCurrent((previous) => (previous + 1 > length - 1 ? 0 : previous + 1));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      handleNextImageClick();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <HomepageCarrouselWrapper>
      <button onClick={handleLastImageClick}>{"<"}</button>
      <img className={animationClass} src={images[current]} key={current} />
      <button onClick={handleNextImageClick}>{">"}</button>
    </HomepageCarrouselWrapper>
  );
}

const HomepageCarrouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: auto;
    object-fit: cover;
  }

  button {
    padding: 1.5rem 1rem;

    position: absolute;
    z-index: 10;

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
      left: 0;
      border-radius: 0 0.5rem 0.5rem 0;
    }

    &:last-child {
      right: 0;
      border-radius: 0.5rem 0 0 0.5rem;
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }

  .next {
    animation: animate-next 1s;
  }

  .last {
    animation: animate-last 1s;
  }

  @keyframes animate-last {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes animate-next {
    from {
      opacity: 0;
      transform: translate(50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
