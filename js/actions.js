export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_SUSPECTS = 'UPDATE_SUSPECTS';
export const SUSPECT_REVEAL = 'SUSPECT_REVEAL';

export function updateData(data) {
  return {
    type : UPDATE_DATA,
    data
  }
}

export function generateSuspects(guilty, fixup) {
  var data = [];
  for(let i=0;i<6;++i) {
    data.push({
      guilty : !!(guilty && i===0),
      fixup : !!(fixup && i===1),
      suspect : (fixup && !guilty) ? i===1 : i===0
    });
  }
  data.sort(() => Math.random() - 0.5);
  return {
    type : UPDATE_SUSPECTS,
    data
  }
}

export function hideSuspects() {
  return {
    type : SUSPECT_REVEAL,
    reveal : false
  };
}
export function revealSuspects() {
  return {
    type : SUSPECT_REVEAL,
    reveal : true
  }
}
