const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const UpdateUserInfoReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartUpdateProfil':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessUpdateUser':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorUpdateUser':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 