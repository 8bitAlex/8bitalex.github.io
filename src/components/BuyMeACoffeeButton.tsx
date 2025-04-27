import Image from 'next/image'

export function BuyMeACoffeeButton({ className }: { className?: string }) {
  return (
    <div>
      <a href="https://www.buymeacoffee.com/8BitAlex" target="_blank">
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          height={60}
          width={217}
          className={className}
        />
      </a>
    </div>
  )
}
