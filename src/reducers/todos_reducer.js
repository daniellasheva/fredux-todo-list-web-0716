export default function(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'DELETE_ITEM':
      var newState= [...state]
      newState.splice(action.payload.id, 1)
      return newState
    default: return state
  }
}
