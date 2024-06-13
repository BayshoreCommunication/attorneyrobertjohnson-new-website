import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <Spinner
        label='Loading...'
        color='primary'
        labelColor='primary'
        size='lg'
      />
    </div>
  );
}
