import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ 
  children, 
  title, 
  subtitle,
  renderTitle = true, 
  renderSubtitle = true 
}) => (
  <>
    <Helmet>
      { title && <title>{title} | Petgram 🐶</title> }
      { subtitle && <meta name='description' content={subtitle} /> }
    </Helmet>
    <Div>
      { title && renderTitle && <Title>{title}</Title> }
      { subtitle && renderSubtitle && <Subtitle>{subtitle}</Subtitle> }
      { children }
    </Div>
  </>
)
