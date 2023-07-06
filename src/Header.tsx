import React from "react";

export const Header: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);
  const onClick = () => setToggled(!toggled);
  return (
    <header className="header">
      <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
      <button
        className="header__menu"
        aria-expanded={toggled}
        onClick={onClick}
      >
        <span className="header__menu-text a11y-hidden">
          {toggled ? "Закрыть меню" : "Открыть меню"}
        </span>
      </button>
      <ul
        className={[
          "header__links",
          toggled ? "header__links_opened header__links-toggled" : "",
        ].join(" ")}
      >
        <li className="header__item">
          <a
            className="header__link header__link_current"
            href="/"
            aria-current="page"
          >
            Сводка
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/devices">
            Устройства
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/scripts">
            Сценарии
          </a>
        </li>
      </ul>
    </header>
  );
};
