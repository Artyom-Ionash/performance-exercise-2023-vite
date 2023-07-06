import React from "react";

export const Event: React.FC<{
  icon: string;
  iconLabel: string;
  onSize?: (width: number) => void;
  title: string;
  subtitle?: string;
  slim: boolean;
}> = (props) => {
  const ref = React.useRef<HTMLLIElement>(null);

  React.useLayoutEffect(() => {
    const width = ref.current!.offsetWidth;
    if (props.onSize) {
      props.onSize(width);
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
