import { tabManager } from '../views/tab.js';

const stationManagerBtn = document.querySelector('#station-manager-button');
const lineManagerBtn = document.querySelector('#line-manager-button');
const sectionManagerBtn = document.querySelector('#section-manager-button');
const mapPrintManagerBtn = document.querySelector('#map-print-manager-button');

export const tabController = () => {
  stationManagerBtn.addEventListener('click', e => tabManager(e.target.value));
  lineManagerBtn.addEventListener('click', e => tabManager(e.target.value));
  sectionManagerBtn.addEventListener('click', e => tabManager(e.target.value));
  mapPrintManagerBtn.addEventListener('click', e => tabManager(e.target.value));
};
