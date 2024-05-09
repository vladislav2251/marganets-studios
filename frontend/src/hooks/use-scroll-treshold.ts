import { ref, onMounted, onUnmounted } from "vue";

function useScrollTreshold(threshold: number) {
     const isScrollThresholdPassed = ref(false);

     function updateScrollState() {
          isScrollThresholdPassed.value = window.scrollY > threshold;
     };

     onMounted(() => {
          updateScrollState();

          window.addEventListener('scroll', updateScrollState, {
               capture: true,
               passive: true,
          });
     });

     onUnmounted(() => {
          window.removeEventListener('scroll', updateScrollState);
     });

     return { isScrollThresholdPassed };
};

export default useScrollTreshold;