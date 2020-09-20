type imageProps = {
  alternativeText: string
  url?: string
}

export type TechSectionProps = {
  title: string
  techIcons: [
    {
      id: string
      icon: imageProps
      title: string
    }
  ]
}

export type AboutSectionProps = {
  title: string
  description: string
  image: imageProps
}

export type HeaderProps = {
  title: string
  description: string
  image: imageProps
  button: {
    label: string
    url: string
  }
}

export type LogoProps = imageProps

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutSection: AboutSectionProps
  techSection: TechSectionProps
}
