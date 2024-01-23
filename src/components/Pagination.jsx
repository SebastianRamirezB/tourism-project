'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Pagination = ({ actionFunction, limitData }) => {
  const [offsetParameter, setOffsetParameter] = useState(0);
  const [limitParameter, setLimitParameter] = useState(5);

  const onClickNext = () => {
    if (limitParameter >= limitData) return;
    setLimitParameter((previousValue) => previousValue + 5);
    setOffsetParameter((previousValue) => previousValue + 5);
  };

  const onClickPrevious = () => {
    if (offsetParameter <= 0) return;
    setOffsetParameter((previousValue) => previousValue - 5);
    setLimitParameter((previousValue) => previousValue - 5);
  };

  useEffect(() => {
    actionFunction(offsetParameter, limitParameter);
  }, [offsetParameter, limitParameter]);

  return (
        <div className="flex w-full justify-center gap-10 ">
            <button onClick={onClickPrevious}>
                <Image src="/icons/arrow-left.svg" width={60} height={60} alt="" />
            </button>
            <button onClick={onClickNext}>
                <Image src="/icons/arrow-right.svg" width={60} height={60} alt="" />
            </button>
        </div>
  );
};
