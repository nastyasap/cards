type ActionType = {
    type: string
}
type ProfileStateType = {}

export const profileReducer = (state: ProfileStateType = {}, action: ActionType): ProfileStateType => {
    switch (action.type) {
        default:
            return state
    }

}