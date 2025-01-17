import { Header } from '@/components/ui/header'
import { Quotes } from '@/components/ui/quotes'
import { Statistic } from '@/components/ui/statistic'
import { RecentHistory } from '@/components/ui/recent-history'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <>
     <Header />
     <Quotes />
     <Statistic />
     <RecentHistory />
     <Button className='neu-button w-[4rem] h-[4rem] add-notes-button items-center !text-[54px]'>+</Button>
    </>
  );
}