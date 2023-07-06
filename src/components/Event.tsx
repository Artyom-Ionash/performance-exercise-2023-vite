import React from "react";

export const Event: React.FC<{
  icon: any;
  iconLabel: any;
  onSize?: any;
  title: any;
  subtitle?: any;
  slim?: any;
}> = (props) => {
  const ref = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const width = ref.current!.offsetWidth;
    const height = ref.current!.offsetHeight;
    if (props.onSize) {
      props.onSize({ width, height });
    }
  });

  return (
    <li
      ref={ref}
      className={["event", props.slim ? "event_slim" : ""].join(" ")}
    >
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
};
