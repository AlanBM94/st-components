/// <reference types="react" />
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
    /**
     * This is the background color of the label
     */
    backgroundColor: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: Props) => JSX.Element;
