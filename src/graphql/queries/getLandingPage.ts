const getLandingPage = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment agendaSection on LandingPage {
    agendaSection: sectionAgenda {
      title
      description
    }
  }

  fragment modulesSection on LandingPage {
    modulesSection: sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment conceptsSection on LandingPage {
    conceptsSection: sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment techSection on LandingPage {
    techSection: sectionTech {
      id
      title
      techIcons {
        icon {
          ...imageData
        }
        title
      }
    }
  }

  fragment aboutSection on LandingPage {
    aboutSection: sectionAboutProject {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        ...imageData
      }
      button {
        label
        url
      }
    }
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutSection
      ...techSection
      ...conceptsSection
      ...modulesSection
      ...agendaSection
    }
  }
`
export default getLandingPage
