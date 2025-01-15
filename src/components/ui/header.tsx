'use client';
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-6 text-[18px] h-[50px]'>
     <div className='neu paddings'>Date</div> 
     <div className='neu paddings'>Time</div>
     <Input className='neu paddings' type="text"/>
     <Avatar className='neu'>
      <AvatarImage src="https://avatars.githubusercontent.com/u/178291318?v=4" />
      <AvatarFallback>JD</AvatarFallback> 
     </Avatar>
    </div>
  );
}

export { Header };