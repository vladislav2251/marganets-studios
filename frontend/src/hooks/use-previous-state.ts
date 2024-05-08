import { ref, watch } from 'vue';

function usePreviousState(initialState: any, state: any) {
     const previousState = ref(initialState);
     
     watch(state, (newValue, oldValue) => {
          previousState.value = oldValue;
     });
     
     return previousState;
};

export default usePreviousState;