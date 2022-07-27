export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      state.push(action.course); // todo: don't use push - mutates state
  }
}
