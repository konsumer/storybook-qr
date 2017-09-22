import React from 'react'
import addons from '@storybook/addons'

const externalUrl = process.env.STORYBOOK_URL || (window.location.origin + window.location.pathname)

addons.register('local_qr', api => {
  class QRPanel extends React.Component {
    constructor (props) {
      super(props)
      this.state = {url: ''}
      this.handleUrl = this.handleUrl.bind(this)
    }

    componentDidMount () {
      api.onStory(this.handleUrl)
    }

    handleUrl (kind, story) {
      const url = `${externalUrl || (window.location.origin + ':' + window.location.port)}iframe.html?selectedKind=${encodeURIComponent(kind)}&selectedStory=${encodeURIComponent(story)}`
      this.setState({url})
    }

    render () {
      return (
        <div>
          <img
            height={200}
            width={200}
            src={'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + encodeURIComponent(this.state.url)}
          />
          <div>{this.state.url}</div>
        </div>
      )
    }
  }

  addons.addPanel('local_qr/panel', {
    title: 'QR Code',
    render: () => <QRPanel />
  })
})
