import {observable, computed, autorun, intercept} from 'mobx';

class Store {
  @observable profilePhotoDragged = false;
  @observable skillMouseEntered = false;
}

const store = new Store ();

intercept (store, 'profilePhotoDragged', (change) => {

    const {newValue} = change;
    document.querySelectorAll ('.opacity-on-drag').forEach (el => {
        
        if(newValue){
            el.classList.add('has-opacity');
        }else{
            el.classList.remove('has-opacity');
        }
    });

    return change;

});

export default store;
