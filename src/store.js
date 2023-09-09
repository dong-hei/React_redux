//액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

// 상태를 보관하는 Redux 저장소
const initstate = {
  username: 'kim',
  num: 1,
};

//액션의 결과를 걸러내는 역할
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { num: state.num + 1, username: action.payload }; // return 되면 호출한쪽에서 받는게 아니라 return 되는 순간 ui 변경
    case 'DECREMENT':
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export default reducer;
