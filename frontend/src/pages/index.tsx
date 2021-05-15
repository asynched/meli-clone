import { Head } from "next/document";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import HomepageCarrousel from "../components/homepage-carrousel";
import HomepageFeaturesInfo from "../components/homepage-features-info";

export default function Index() {
  return (
    <PageWrapper>
      <Header />
      <HomepageCarrousel />
      <ContentWrapper>
        <main>
          <HomepageFeaturesInfo />
          <CardSection>
            <h1>Baseado na sua última visita</h1>
            <div className="card-container">
              {[1, 2, 3, 4, 5].map(() => (
                <div className="card">
                  <img
                    src="https://http2.mlstatic.com/D_Q_NP_802378-MLA40044187546_122019-AB.webp"
                    alt=""
                  />
                  <div>
                    <h2>R$45,99</h2>
                    <p>6x de R$6,66 sem juros</p>
                    <p>
                      <span>Frete grátis</span>
                    </p>
                    <p className="product-name">
                      Mouse sem fio Multilaser MO251 preto
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardSection>
        </main>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
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

const CardSection = styled.section`
  h1 {
    color: var(--text);
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .card-container {
    margin: 2rem 0;

    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .card {
      width: 16rem;
      background: var(--white);

      border: 1px solid var(--border);
      border-radius: 0.5rem;

      overflow: hidden;

      transition: var(--transition);

      img {
        border-bottom: 1px solid var(--border);
      }

      div {
        padding: 0.5rem 1rem;

        h2 {
          font-weight: 400;
        }

        p {
          font-size: 0.8rem;
        }

        span {
          color: var(--green);
        }

        p.product-name {
          font-size: 0;
          transition: var(--transition);
        }
      }

      &:hover {
        p.product-name {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
