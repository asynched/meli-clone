import styled from "styled-components";

export default function HomepageFeaturesInfo() {
  return (
    <HomepageFeaturesInfoWrapper>
      <div className="container-special">
        <p>
          <b>Pagamento rápido e seguro</b>
        </p>
        <p>com Mercado Pago</p>
      </div>
      <div className="container">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p>
            <b>Até 12 vezes sem juros</b>
          </p>
          <a href="/">Ver mais</a>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p>
            <b>Parcelamento no boleto</b>
          </p>
          <a href="/">Conheça o mercado crédito</a>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p>
            <b>Via pix</b>
          </p>
          <a href="/">Ver mais</a>
        </div>
      </div>
    </HomepageFeaturesInfoWrapper>
  );
}

const HomepageFeaturesInfoWrapper = styled.div`
  margin: 2rem 0;

  background: var(--white);
  padding: 0.25rem 0.25rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-radius: 0.25rem;

  overflow: hidden;

  .container-special {
    padding: 1rem;

    border-left: 4px solid var(--blue);
    border-right: 1px solid var(--border);

    p b {
      color: var(--heading);
      font-size: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 0.8rem;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p b {
      color: var(--heading);
      font-size: 1rem;
      font-weight: 400;
    }

    a {
      font-size: 0.8rem;
      color: var(--blue);

      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--border);
      border-radius: 50%;

      width: 3rem;
      height: 3rem;

      svg {
        color: var(--blue);

        width: 1.5rem;
      }
    }
  }
`;
