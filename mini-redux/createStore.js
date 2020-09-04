let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}

function reducer(state=1, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else {
        return state
    }
}

let store = createStore(reducer)

//  测试
store.dispatch(action1)
console.log(store.getState())

//createStore
function createStore() {
    let state 
    // let state = reducer(null, {})
    function dispatch(action) {
        state = reducer(state, action)
    }
    // dispatch({type: ''}) //生成默认值
    function getState() {
        return state
    }

    return {
        dispatch, getState
    }
}