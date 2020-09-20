const getLandingPage = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment faqSection on LandingPage {
    faqSection: sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  fragment reviewsSection on LandingPage {
    reviewsSection: sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          url
          alternativeText
        }
      }
    }
  }

  fragment aboutUsSection on LandingPage {
    aboutUsSection: sectionAboutUs {
      title
      authors {
        id
        photo {
          alternativeText
          url
        }
        name
        role
        socialLinks {
          id
          url
          title
        }
        description
      }
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      button {
        label
        url
      }
      benefits
    }
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

  fragment aboutProjectSection on LandingPage {
    aboutProjectSection: sectionAboutProject {
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
      ...aboutProjectSection
      ...techSection
      ...conceptsSection
      ...modulesSection
      ...agendaSection
      ...pricingBox
      ...aboutUsSection
      ...reviewsSection
      ...faqSection
    }
  }
`
export default getLandingPage
