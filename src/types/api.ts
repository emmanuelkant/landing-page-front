export type imageProps = {
  alternativeText: string
  url?: string
}

type buttonProps = {
  label: string
  url: string
}

export type AuthorProps = {
  id?: string
  photo: imageProps
  name: string
  role: string
  description: string
  socialLinks: [
    {
      id: string
      url: string
      title: string
    }
  ]
}

export type AboutUsSectionProps = {
  title: string
  authors: [AuthorProps]
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  button: buttonProps
  benefits: string
}

export type AgendaSectionProps = {
  title: string
  description: string
}

export type ModulesSectionProps = {
  title: string
  modules: [
    {
      id: string
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type ConceptsSectionProps = {
  title: string
  concepts: [
    {
      id: string
      title: string
    }
  ]
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

export type AboutProjectSectionProps = {
  title: string
  description: string
  image: imageProps
}

export type HeaderProps = {
  title: string
  description: string
  image: imageProps
  button: buttonProps
}

export type LogoProps = imageProps

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutProjectSection: AboutProjectSectionProps
  techSection: TechSectionProps
  conceptsSection: ConceptsSectionProps
  modulesSection: ModulesSectionProps
  agendaSection: AgendaSectionProps
  pricingBox: PricingBoxProps
  aboutUsSection: AboutUsSectionProps
}
