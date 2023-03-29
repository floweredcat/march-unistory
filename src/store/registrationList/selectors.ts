export const selectRegistationModule = (state: any) => state.registrationList;

export const selectRegistrationList = (state: any) => selectRegistationModule(state).entities;

export const selectIsRegistrationListEdited = (state: any) => selectRegistationModule(state).status === "edited"
