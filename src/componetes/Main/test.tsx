import { render, screen } from '@testing-library/react'
import React from 'react'

import Main from '.'

describe('<Main />', () => {
  it('should render the headind', () => {
    // renderiza o component
    render(<Main />)
    // busca o elemento e verofica e existencia dele.
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
