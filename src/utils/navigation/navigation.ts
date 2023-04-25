import { useRouter } from "next/router";
import { useCallback } from "react";

const useNavigation = () => {
  const router = useRouter();

  const navigate = useCallback(
    (path: any, options: any) => {
      router.push(path, undefined, options);
    },
    [router]
  );

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const pathname = router.pathname;
  const query = router.query;

  return { navigate, goBack, pathname, query };
};

export default useNavigation;
