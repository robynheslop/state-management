import React from "react";
import Conspiracy from "./Conspiracy";

const Template = (args) => <Conspiracy {...args} />;

export const theOneWithDefaultValues = Template.bind({});
theOneWithDefaultValues.args = {};

export const theOneWithAConspiracy = Template.bind({});
theOneWithAConspiracy.args = {
  id: "71607ad7-c37a-4538-b6c7-be932c3ca0d3",
  title: "5G M8",
  owner: "Daddy <3s 3G",
  description:
    "5G is depressing people's immune systems and causing them to get sick. Covid is just a cover story.",
  imageUrl:
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/420F/production/_113111961_peru2.jpg",
};

export default {
  title: "Components/Conspiracy",
  component: Conspiracy,
};
