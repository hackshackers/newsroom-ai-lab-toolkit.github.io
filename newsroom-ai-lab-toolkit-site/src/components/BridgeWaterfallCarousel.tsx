import React from 'react';
import IterationJourneyCarousel from './IterationJourneyCarousel';

const STEPS = [
  {
    emoji: '📐',
    label: 'Problem Statement',
    statement: {
      user: 'The transportation authorities',
      need: 'a bridge that lets vehicles and pedestrians safely cross the river',
      goal: 'they can reliably connect both sides of the city for decades to come',
    },
  },
  {
    image: '/img/waterfall_bridge_1.png',
    label: '1. Erection of piers and support spans',
  },
  {
    image: '/img/waterfall_bridge_2.png',
    label: '2. Construction of work station on central tower',
  },
  {
    image: '/img/waterfall_bridge_3.png',
    label: '3. Installation of temporary stay cables and first erection cables',
  },
  {
    image: '/img/waterfall_bridge_4.png',
    label: '4. Extension of central span',
  },
  {
    image: '/img/waterfall_bridge_5.png',
    label: '5. Completion of central span and removal of temporary cables',
  },
];

export default function BridgeWaterfallCarousel() {
  return <IterationJourneyCarousel items={STEPS} />;
}
