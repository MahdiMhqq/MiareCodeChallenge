import { useEffect } from "react";
import type { IReportQueryParams } from "types";

const scrollableHandler = (
  e: Event,
  setQueryParams: React.Dispatch<React.SetStateAction<IReportQueryParams>>
) => {
  const divEl = e.target as HTMLDivElement;

  const clientHeight = divEl.clientHeight;
  const scrollHeight = divEl.scrollHeight - clientHeight;
  const scrollY = divEl.scrollTop;

  const scrollTrigger = scrollHeight < 500 ? clientHeight : scrollHeight - 500;

  if (scrollHeight > clientHeight && scrollY > scrollTrigger) {
    setQueryParams((prev) => ({ ...prev, offset: prev.offset + prev.order }));
  }
};

function useLoadMore(
  isLoading: boolean,
  scrollableRef: React.RefObject<HTMLDivElement>,
  setQueryParams: React.Dispatch<React.SetStateAction<IReportQueryParams>>
) {
  // LIFE CYCLE HOOKS
  useEffect(() => {
    if (!isLoading && scrollableRef && scrollableRef.current) {
      const scrollableElement = scrollableRef.current;

      scrollableElement.addEventListener("scroll", (e) =>
        scrollableHandler(e, setQueryParams)
      );

      return () => {
        scrollableElement.removeEventListener("scroll", (e) =>
          scrollableHandler(e, setQueryParams)
        );
      };
    }
  }, [isLoading, scrollableRef]);
  return null;
}

export default useLoadMore;
