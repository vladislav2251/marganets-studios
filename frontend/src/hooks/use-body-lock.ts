import { ref, onMounted, onUnmounted } from 'vue';

function useLockBody(isLocked: any) {
     const originalOverflowStyle = ref('');

     function lockBody() {
          originalOverflowStyle.value = window.getComputedStyle(document.body).overflow;
          document.body.style.overflow = isLocked ? 'hidden' : originalOverflowStyle.value;
     };

     onMounted(() => {
          lockBody();
     });

     onUnmounted(() => {
          document.body.style.overflow = originalOverflowStyle.value;
     });
};

export default useLockBody;
