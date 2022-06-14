import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useScrollByPageMove = () => {
  // const { viewStore } = IRootStore;
  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);

  useEffect(() => {
    const scrollHandler = function () {
      // viewStore.setScrollY(router.pathname); // router.pathname은 현재 페이지 경로
    };

    window.addEventListener("scroll", scrollHandler);
    setPathname(router.pathname);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [router.pathname]);
};

export default useScrollByPageMove;
