import React, { useEffect, useState } from "react";
import { Wrapper } from './styles';

interface IFade {
    show: boolean;
    children: React.ReactNode
}

export const Fade = ({ show, children }: IFade) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render ? (
      <Wrapper show={show}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </Wrapper>
    ) : null
  );
};

export default Fade;