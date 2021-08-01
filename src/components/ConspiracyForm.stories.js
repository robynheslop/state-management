import React from "react";
import ConspiracyForm from "./ConspiracyForm";

const Template = (args) => <ConspiracyForm {...args} />;

export const theOneWithDefaultValues = Template.bind({});
theOneWithDefaultValues.args = {};

export const theOneWithACustomSubmitHandler = Template.bind({});
theOneWithACustomSubmitHandler.args = {
  handleSubmitForm: (formData) => {
    console.log(formData);
  },
};

export default {
  title: "Components/ConspiracyForm",
  component: ConspiracyForm,
  argTypes: {},
};
