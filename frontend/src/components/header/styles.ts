import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: var(--yellow);

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.05);

  .top-container {
    padding: 0.5rem 0;

    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      padding: 0.5rem 1rem;

      background: var(--white);
      width: 50%;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.125);

      input {
        width: 100%;

        border: none;
        border-right: 1px solid var(--border);

        color: var(--text);
      }

      input::placeholder {
        color: var(--text);
      }

      svg {
        width: 1rem;
      }
    }
  }

  .bottom-container {
    padding: 0.25rem 0;

    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .bottom-container-info {
      color: var(--heading);

      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.5rem;
      }

      p {
        font-size: 0.6rem;

        span {
          font-size: 0.7rem;
        }
      }
    }

    .bottom-container-options {
      font-size: 0.8rem;

      display: flex;
      gap: 0.6rem;
    }

    .bottom-container-profile {
      color: var(--heading);
      font-size: 0.9rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      span {
        display: flex;
        align-items: center;

        svg {
          width: 0.9rem;
        }
      }
    }
  }
`;
