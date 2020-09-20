const getLandingPage = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`
export default getLandingPage
