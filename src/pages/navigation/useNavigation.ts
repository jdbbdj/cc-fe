import { useRouter, NextRouter } from "next/router";

type NavigationOptions = Omit<Parameters<NextRouter["push"]>[2], "shallow">;

type NavigationFunctions = {
  navigateTo: (path: string, options?: NavigationOptions) => void;
  navigateBack: () => void;
  navigateForward: () => void;
};

const useNavigation = (): {
  router: NextRouter;
} & NavigationFunctions => {
  const router = useRouter();

  const navigateTo = (path: string, options: NavigationOptions = {}) => {
    router.push(path, undefined, options);
  };

  const navigateBack = () => {
    router.back();
  };

  const navigateForward = () => {
    router.forward();
  };

  return {
    router,
    navigateTo,
    navigateBack,
    navigateForward,
  };
};

export default useNavigation;
