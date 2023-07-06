import React from "react";
import { Event } from "../Event.tsx";

const TABS = {
  all: {
    title: "Все",
    items: Array(1 << 6)
      .fill([
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "D-Link Omna 180 Cam",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "temp",
          iconLabel: "Температура",
          title: "Elgato Eve Degree Connected",
          subtitle: "Выключено до 17:00",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
      ])
      .flat(),
  },
  kitchen: {
    title: "Кухня",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
    ],
  },
  hall: {
    title: "Зал",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Выключено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Выключено",
      },
    ],
  },
  lights: {
    title: "Лампочки",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
    ],
  },
  cameras: {
    title: "Камеры",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
} as const;
const TABS_KEYS = Object.keys(TABS) as (keyof typeof TABS)[];

export const Carousel = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const initedRef = React.useRef(false);
  const [activeTab, setActiveTab] = React.useState("");
  const [hasRightScroll, setHasRightScroll] = React.useState(false);

  React.useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  });

  const onSelectInput: React.ChangeEventHandler<HTMLSelectElement> = (event) =>
    setActiveTab(event.target!.value);

  let sumWidth = 0;
  const onSize = (width: number) => {
    sumWidth += width;
  };
  React.useEffect(() => {
    const newHasRightScroll = sumWidth > ref.current!.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });

  const onArrowCLick = () => {
    const scroller = ref.current!.querySelector(
      ".section__panel:not(.section__panel_hidden)"
    );
    scroller?.scrollTo({
      left: scroller.scrollLeft + 400,
      behavior: "smooth",
    });
  };
  return (
    <section className="section main__devices">
      <div className="section__title">
        <h2 className="section__title-header">Избранные устройства</h2>

        <select
          className="section__select"
          defaultValue="all"
          onInput={onSelectInput}
        >
          {TABS_KEYS.map((key) => (
            <option key={key} value={key}>
              {TABS[key].title}
            </option>
          ))}
        </select>

        <ul role="tablist" className="section__tabs">
          {TABS_KEYS.map((key) => (
            <li
              key={key}
              role="tab"
              aria-selected={key === activeTab}
              tabIndex={key === activeTab ? 0 : undefined}
              className={[
                "section__tab",
                key === activeTab ? "section__tab_active" : "",
              ].join(" ")}
              id={`tab_${key}`}
              aria-controls={`panel_${key}`}
              onClick={() => setActiveTab(key)}
            >
              {TABS[key].title}
            </li>
          ))}
        </ul>
      </div>

      <div className="section__panel-wrapper" ref={ref}>
        {TABS_KEYS.map((key) => (
          <div
            key={key}
            role="tabpanel"
            className={[
              "section__panel",
              key === activeTab ? "" : "section__panel_hidden",
            ].join(" ")}
            aria-hidden={key === activeTab ? "false" : "true"}
            id={`panel_${key}`}
            aria-labelledby={`tab_${key}`}
          >
            <ul className="section__panel-list">
              {TABS[key].items.map((item, index) => (
                <Event key={index} {...item} onSize={onSize} />
              ))}
            </ul>
          </div>
        ))}
        {hasRightScroll && (
          <div className="section__arrow" onClick={onArrowCLick}></div>
        )}
      </div>
    </section>
  );
};
