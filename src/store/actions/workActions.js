import { workServices } from "../services";

export const getWork = (data) => {
  return workServices
    .getWorkByIdNote(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response));
};
export const createWord = (data) => {
  return workServices
    .createWord(data)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status === 200) {
        return data;
      }
    })
    .catch((err) => console.log(err?.response));
};
export const updateStatusWork = (idWork) => {
  return workServices
    .updateStatusWork(idWork)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response));
};

export const removeWork = (idWork) => {
  return workServices
    .removeWork(idWork)
    .then((res) => {
      const { status, data } = res;
      // eslint-disable-next-line eqeqeq
      if (status == 200) {
        return data;
      }
    })
    .catch((err) => console.log(err.response));
};
