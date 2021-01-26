export const addItem = (item) => ({
  type: "ADD_ITEM",
  data: item,
});
export const updateItem = (id, title) => ({
  type: "UPDATE_ITEM",
  id: id,
  title: title,
});
export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  id: id,
});
export const handleIsDone = (checked, id) => ({
  type: "SET_ISDONE",
  isDone: checked,
  id: id,
});
export const handleFilter = () => ({
  type: "HANDLE_ISFILTER",
});
