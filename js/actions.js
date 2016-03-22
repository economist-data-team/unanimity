export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_SUSPECTS = 'UPDATE_SUSPECTS';

export function updateData(data) {
  return {
    type : UPDATE_DATA,
    data
  }
}

export function generateSuspects(guilty) {
  var suspects = [];
  for(let i=0;i<6;++i) {
    suspects.push({
      guilty : guilty && i===0
    });
  }
  suspects.sort(() => Math.random() - 0.5)
  return {
    type : UPDATE_SUSPECTS,
    suspects
  }
}
