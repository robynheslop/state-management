export const deleteConspiracyAction = (id) => ({
  type: "DELETE_CONSPIRACY",
  payload: { id },
});

export const addConspiracyAction = (conspiracy) => ({
  type: "ADD_CONSPIRACY",
  payload: conspiracy,
});
