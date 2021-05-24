import Image from 'next/image'
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { HeaderItem } from './HeaderItem'

export const Header = () => {
  return (
    <header>
      <div className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem Icon={HomeIcon} title='Home' />
          <HeaderItem Icon={LightningBoltIcon} title='TRENDING' />
          <HeaderItem Icon={BadgeCheckIcon} title='VERIFIED' />
          <HeaderItem Icon={CollectionIcon} title='COLLECTIONS' />
          <HeaderItem Icon={SearchIcon} title='SEARCH' />
          <HeaderItem Icon={UserIcon} title='ACCOUNT' />
        </div>
        <Image
          className='object-contain'
          src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
          width={200}
          height={100}
        />
      </div>
    </header>
  )
}
