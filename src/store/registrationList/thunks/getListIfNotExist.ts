import { registrationListSliceActions } from "../registrationList";
import { normolizeEntities } from "../../helpers/normalizeEntites";

export const getListIfNotExist =
  (dispatch: any) => {
    const options = {
      headers: {
        "accept": "application/json"
      },
    };

    dispatch(registrationListSliceActions.startLoading());

    const url = new URL("https://new-backend.unistory.app/api/data?page=0&perPage=20");

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // if (data.OK) {
        //   dispatch(
        //     registrationListSliceActions.successLoading(normolizeEntities(data.result))
        //   );
        // } else throw Error(data.error);
      })
      .catch((err) => {
        dispatch(registrationListSliceActions.failLoading(err));
      });
  };
