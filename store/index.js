import imageData from "~/static/new.json";
import photoseries from "~/static/photoseries.json";

photoseries.forEach(el => {
  el.JLName = imageData
    .filter(image => image.Keywords.includes(el.Name))
    .map(image => image.FileName);
  el.JLAspect = imageData
    .filter(image => image.Keywords.includes(el.Name))
    .map(image => image.ImageWidth / image.ImageHeight);
  el.FileName = imageData
    .filter(image => image.Keywords.includes(`photoseries${el.Id}`))
    .map(e => e.FileName)[0];
  el.ImagesPH = imageData.filter(image => image.Keywords.includes(el.Name));
});

export const state = () => ({
  photoseriesIm: null,
  list: [],
  photoseries
});
export const getters = {
  photoseriesImage() {
    return photoseries;
  },
  filterPH: state => payload =>
    state.photoseries.find(todo => todo.Route === payload)
};
export const mutations = {
  SET(state, payload) {
    const qqq = imageData.filter(image => image.Keywords.includes(payload));
    state.list = qqq;
  },
  GET_IMAGE(state, payload) {
    const fillterimage = photoseries.find(el => el.Route === payload);
    state.photoseriesIm = fillterimage.ImagesPhotoseries;
  }
};
