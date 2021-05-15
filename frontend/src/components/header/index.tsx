import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="top-container">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo-pt__large_plus.png"
          alt="Mercado Livre"
        />
        <div>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p>Doe para um Brasil sem fome</p>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-info">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>
            Informe seu <br />
            <span>CEP</span>
          </p>
        </div>
        <div className="bottom-container-options">
          <span>Ofertas do dia</span>
          <span>Histórico</span>
          <span>Supermercado</span>
          <span>Moda</span>
          <span>Vender</span>
          <span>Contato</span>
        </div>
        <div className="bottom-container-profile">
          <span>Crie sua conta</span>
          <span>Entre</span>
          <span>Compras</span>
          <span>
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </HeaderWrapper>
  );
}
