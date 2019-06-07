import { useEffect, useState, useMemo } from "react";
import { bindActionCreators, ActionCreator, Action } from 'redux';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';


export function useActions(actions: any, deps: any[]) {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a: ActionCreator<Action>) => bindActionCreators(a, dispatch))
    }
    return bindActionCreators(actions, dispatch)
  }, deps ? [dispatch, ...deps] : deps)
}

export function useShallowEqualSelector(selector: any) {
  return useSelector(selector, shallowEqual)
}

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: any) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};