export const selectRegistationModule = (state: any) => state.registrationList;

export const selectRegistrationList = (state: any) => selectRegistationModule(state).entities;

export const selectRegistrationListIds = (state: any) => selectRegistationModule(state).ids;
