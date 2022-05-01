import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select", options: ["normal", "h1", "h2", "h3"] },
    color: { control: "select", options: ["primary", "secondary", "tertiary"] },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Primary = Template.bind({});

Primary.args = {
  size: "normal",
  color: "primary",
  allCaps: false,
};
export const Secondary = Template.bind({});

Secondary.args = {
  size: "normal",
  color: "secondary",
  allCaps: false,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: "normal",
  color: "tertiary",
  allCaps: false,
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  size: "h1",
  fontColor: "#ff0000",
  allCaps: false,
};
export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
  size: "h1",
  fontColor: "white",
  backgroundColor: "black",
};
