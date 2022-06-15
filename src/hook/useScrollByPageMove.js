import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollByPageMove = () => {
  const router = useRouter();

  useEffect(() => {
    window.history.scrollRestoration = "auto";

    const cacheScrollPositions = [];
    let shouldScrollRestore = {};

    // 라우터 변경이 시작되면..
    router.events.on("routeChangeStart", () => {
      cacheScrollPositions.push([window.scrollX, window.scrollY]);
    });

    // 라우터 변경이 완료되면..
    router.events.on("routeChangeComplete", () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore;
        window.scrollTo(x, y);
        shouldScrollRestore = null;
      }
      window.history.scrollRestoration = "auto";
    });

    // 뒤로가기 시..
    router.beforePopState(() => {
      if (cacheScrollPositions.length > 0) {
        const scrollPosition = cacheScrollPositions.pop();

        if (scrollPosition) {
          shouldScrollRestore = {
            x: scrollPosition[0],
            y: scrollPosition[1],
          };
        }
      }
      window.history.scrollRestoration = "manual";
      return true;
    });
  }, []);
};

export default useScrollByPageMove;
