import { ref, watch } from 'vue';

function useLockBody(isLocked: any) {
     const isVisibleLocked = ref(isLocked);

     watch(() => isLocked, (newValue) => {
          isVisibleLocked.value = newValue;
     });

     document.body.style.overflow = isLocked 
          ? 'hidden' 
          : 'auto';
};

export default useLockBody;
