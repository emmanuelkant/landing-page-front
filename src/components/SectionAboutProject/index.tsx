import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutProjectSectionProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  image,
  title,
  description
}: AboutProjectSectionProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src={getImageUrl(image.url)} alt={image.alternativeText} />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
