import { render, screen } from '@testing-library/react'
import React from 'react'

import Main from '.'

describe('<Main />', () => {
  it('should render the headind', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // busca o elemento e verofica e existencia dele.
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
