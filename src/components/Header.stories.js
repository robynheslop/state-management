import React from 'react'
import Header from './Header'

const Template = (args) => <Header {...args}/>

export const theOneWithDefaultValues = Template.bind({})
theOneWithDefaultValues.args = {}

export const theOneWithNoConspiracies = Template.bind({})
theOneWithNoConspiracies.args = {numberOfConspiracies: 0}

export const theOneWithOneConspiracy = Template.bind({})
theOneWithOneConspiracy.args = {numberOfConspiracies: 1}

export const theOneWithTenConspiracies = Template.bind({})
theOneWithTenConspiracies.args = {numberOfConspiracies: 10}

export default {
    title: 'Components/Header',
    component: Header,
}