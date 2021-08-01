import React from "react";
import App from "./App";

const Template = (args) => <App {...args} />;

export const theOneWithDefaultValues = Template.bind({});
theOneWithDefaultValues.args = {};

export const theOneWithSomeConspiracies = Template.bind({});
theOneWithSomeConspiracies.args = {
  initialState: {
    conspiracies: [
      {
        id: "73d645a2-27f9-4039-80d9-32fe07875252",
        title: "Bill Gates Stuck His Micro Chip In Me Arm :(",
        owner: "EspresoMartiniGurl",
        description: "Windows sux",
        imageUrl: "https://i.imgur.com/VowdLtk.jpeg",
      },
      {
        id: "71607ad7-c37a-4538-b6c7-be932c3ca0d3",
        title: "5G M8",
        owner: "Daddy <3s 3G",
        description:
          "5G is depressing people's immune systems and causing them to get sick. Covid is just a cover story.",
        imageUrl:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/420F/production/_113111961_peru2.jpg",
      },
    ],
  },
};

export default {
  title: "Components/App",
  component: App,
};
