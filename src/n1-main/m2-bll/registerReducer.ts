type ActionType = {
    type: string
}
type RegisterStateType = {}

export const registerReducer = (state: RegisterStateType = {}, action: ActionType): RegisterStateType => {
    switch (action.type) {
        default:
            return state
    }

}