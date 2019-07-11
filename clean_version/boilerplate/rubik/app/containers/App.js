// @flow
import * as React from 'react'
import TitleBar from 'frameless-titlebar'
// import menu from '../menu'; // import your menu file

type Props = {
  children: React.Node
}

export default class App extends React.Component<Props> {
  props: Props

  render() {
    const { children } = this.props
    // return <React.Fragment>{children}</React.Fragment>
    return (
      <div>
        <TitleBar
          icon={`${__dirname}/../resources/icon.png`}
          app="Electron"
          // menu={menu}
        />
        {
          /* the rest of your application
          *  all your routes and stuff
          */
          this.props.children
        }
      </div>
    )
  }
}
