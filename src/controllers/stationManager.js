import { overTwo, notDuplicate } from '../controllers/validation.js';
import { showAddedStation } from '../views/stationManager.js';
import { clearFocus } from '../views/utils.js';

const stationManagerInput = document.querySelector('#station-name-input');
const stationAddBtn = document.querySelector('#station-add-button');

export const stationAddListener = subwayMap => {
  stationAddBtn.addEventListener('click', () =>
    addNewStation(stationManagerInput.value, subwayMap)
  );
  stationManagerInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      addNewStation(stationManagerInput.value, subwayMap);
    }
  });
};

const addNewStation = (name, subwayMap) => {
  if (overTwo(name) && notDuplicate(name, subwayMap.stationList)) {
    subwayMap.addStation(name);
    showAddedStation(subwayMap);
  } else {
    alert('잘못된 값입니다. 다시 입력해주세요.');
  }
  clearFocus(stationManagerInput);
};

export const deleteStation = (name, subwayMap) => {
  if (confirm('정말로 삭제하시겠습니까?')) {
    subwayMap.delStation(name);
    showAddedStation(subwayMap);
  }
};
