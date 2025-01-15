import { Header } from '@/components/ui/header'
import { Quotes } from '@/components/ui/quotes'
import { Statistic } from '@/components/ui/statistic'
import { RecentHistory } from '@/components/ui/recent-history'

export default function Dashboard() {
  return (
    <>
     <Header />
     <Quotes />
     <Statistic />
     <RecentHistory />
    </>
  );
}