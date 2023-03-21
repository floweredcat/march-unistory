
import {normolizeEntities} from '../../helpers/normalizeEntites';
import {type AppDispatch} from '../../store';
import {registrationListSliceActions} from '../registrationList';
import {selectRegistrationListIds} from '../selectors';

export const getListIfNotExist = () => (dispatch: AppDispatch, getState: any) => {
	if (selectRegistrationListIds(getState())?.length > 0) {
		return;
	}

	const options = {
		headers: {
			accept: 'application/json',
		},
	};

	dispatch(registrationListSliceActions.startLoading());

	const url = new URL('https://new-backend.unistory.app/api/data?page=0&perPage=20');

	fetch(url, options)
		.then(async res => res.json())
		.then(data => {
			if (!data) {
				throw new Error('catching error');
			}

			dispatch(registrationListSliceActions.successLoading(data.items));
		})
		.catch(err => {
			console.log(err);
			dispatch(registrationListSliceActions.failLoading(err));
		});
};
