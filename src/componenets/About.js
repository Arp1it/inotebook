import React, { useEffect, useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const About = () => {
  const context = useContext(NoteContext)

  useEffect(() => {
    context.update()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
        <h1>This is About {context.state.name} and he is a {context.state.title} In class {context.state.class}!</h1>
    </div>
  )
}

export default About