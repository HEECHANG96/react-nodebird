export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태크 #익스프레스',
        Images: [{
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg'
        }, {
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg',
        }, {
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte322f5419cb55861/63472ca5b02c2f11c6f5eac8/GettyImages-1432946487.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고싶어요~',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

// 변수로 빼주는게 좋음 => 에러 발생을 막을 수 있다.
const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;