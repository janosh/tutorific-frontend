export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('persistedState');
    if (!serializedState) return;
    return JSON.parse(serializedState);
  } catch (err) {
    return;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('persistedState', serializedState);
  } catch (err) {
    console.error(err);
  }
}