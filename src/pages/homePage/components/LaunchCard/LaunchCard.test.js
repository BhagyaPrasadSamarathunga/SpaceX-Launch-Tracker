import React from 'react';
import { render, screen } from '@testing-library/react';
import LaunchCard from "./LaunchCard.js";

const launchSuccessObj = {
date_utc: "2010-06-04T18:45:00.000Z",
details: null,
failures: [],
id: "5eb87cddffd86e000604b32f",
links: {patch: {large: "https://images2.imgbox.com/66/b4/8KZsjbt4_o.png",
  small: "https://images2.imgbox.com/73/7f/u7BKqv2C_o.png"}
},
name: "Falcon 10 Test Flight",
success: true,
upcoming: false }

const launchFailedObj = {
  date_utc: "2010-06-04T18:45:00.000Z",
  details: null,
  failures: [{altitude: null, 
    reason: "merlin engine failure",
    time: 33}],
  id: "5eb87cddffd86e000604b32f",
  links: {patch: {large: "https://images2.imgbox.com/66/b4/8KZsjbt4_o.png",
    small: "https://images2.imgbox.com/73/7f/u7BKqv2C_o.png"}
  },
  name: "Falcon 20 Test Flight",
  success: false,
  upcoming: false }

describe('LaunchCard Component', () => {

  test('renders the launch card component correctly', () => {
    render(<LaunchCard  launch={launchSuccessObj}/>);
    const nameElement = screen.getByText('Falcon 10 Test Flight');
    expect(nameElement).toBeInTheDocument();
  });

  test('renders the date correctly', () => {
    render(<LaunchCard  launch={launchSuccessObj}/>);
    const dateElement = screen.getByText('04-06-2010');
    expect(dateElement).toBeInTheDocument();
  });

  test('display the status badge as success', () => {
    render(<LaunchCard  launch={launchSuccessObj}/>);
    const statusBadge = screen.getByText('Success');
    expect(statusBadge).toBeInTheDocument();
  });

  test('display the status badge as failure', () => {
    render(<LaunchCard  launch={launchFailedObj}/>);
    const statusBadge = screen.getByText('Failure');
    expect(statusBadge).toBeInTheDocument();
  });

  test('display the failure reason', () => {
    render(<LaunchCard  launch={launchFailedObj}/>);
    const failureReason = screen.getByText('Failure Reason : merlin engine failure');
    expect(failureReason).toBeInTheDocument();
  });

  test('display the logo', () => {
    render(<LaunchCard  launch={launchFailedObj}/>);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });
});