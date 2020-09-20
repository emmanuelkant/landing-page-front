type imageProps = {
  alternativeText: string
  url?: string
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
  conceptsSection: ConceptsSectionProps
  modulesSection: ModulesSectionProps
  agendaSection: AgendaSectionProps
}
