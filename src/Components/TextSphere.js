import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { sphereTags } from '../data';
import './TextSphere.css';

const TextSphere = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let cloud;

    const mount = () => {
      if (cloud) cloud.destroy();
      el.innerHTML = '';
      const radius = Math.max(120, Math.min(210, el.offsetWidth / 2 - 30));
      cloud = TagCloud(el, sphereTags, {
        radius,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
      });
    };

    mount();
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(mount, 200);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      if (cloud) cloud.destroy();
    };
  }, []);

  return <div className="sphere" ref={ref} />;
};

export default TextSphere;
