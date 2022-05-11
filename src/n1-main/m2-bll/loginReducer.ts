type ActionType = {
    type: string
}
type LoginStateType = {}

export const loginReducer = (state: LoginStateType = {}, action: ActionType): LoginStateType => {
    switch (action.type) {
        default:
            return state
    }

}