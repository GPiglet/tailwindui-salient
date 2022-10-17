import Image from 'next/future/image'
import logoEDM from '@/images/logos/logo.png'

export function Logo(props) {
  return (
    <Image src={logoEDM} alt='Event Deal Monitor' unoptimized width={200} />
  )
}
