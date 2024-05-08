import { ref, onMounted, onUnmounted } from "vue";

function useScrollTreshold(threshold: number) {
     const isScrollThresholdPassed = ref(false);

     function updateScrollState() {
          isScrollThresholdPassed.value = window.scrollY > threshold;
          console.log("Threshold passed:", isScrollThresholdPassed.value);
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