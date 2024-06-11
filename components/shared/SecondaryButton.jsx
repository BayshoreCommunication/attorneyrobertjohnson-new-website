'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const SecondaryButton = ({
  title,
  radius,
  style,
  link,
  selectValue,
  variant,
  size,
}) => {
  const router = useRouter();

  return (
    <Button
      radius={radius}
      size={size}
      variant={variant}
      className={`${style} shadow-lg font-medium text-lg px-5 py-4 mb-2`}
      onClick={() => router.push(link)}
    >
      {title}
    </Button>
  );
};

export default SecondaryButton;
