import "./myLabel.css";

export interface Props {
  /**
   * This is the message to display
   */
  label: string;
  /**
   * This is the label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * This boolean represents if the label should be all caps
   */
  allCaps: boolean;
  /**
   * This is the color of the label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * This is the custom font color of the label
   */
  fontColor: string;
}

export const MyLabel = ({
  allCaps,
  color,
  label = "No label",
  size = "normal",
  fontColor = "black",
}: Props) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
