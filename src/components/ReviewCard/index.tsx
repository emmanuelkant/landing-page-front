import React, { useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { ReviewProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const ReviewCard: React.FC<ReviewProps> = ({ id, name, photo, text }) => {
  const [seeMoreSeeLess, setSeeMoreSeeLess] = useState(false)
  useEffect(() => {
    const texts = document.querySelectorAll('p.text')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={getImageUrl(photo.url)}
          loading="lazy"
          alt={photo.alternativeText}
        />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input
          type="checkbox"
          id={`review-${id}`}
          onClick={() => setSeeMoreSeeLess(!seeMoreSeeLess)}
        />
        <p className="text">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          {seeMoreSeeLess ? 'Ver menos' : 'Ver tudo'}
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
