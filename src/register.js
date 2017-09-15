import React from 'react'
import addons from '@storybook/addons'

export default (externalUrl) => {
  // add QR code for external address of current story
  // requires process.env.LOCAL_EXTERNAL_IP
  // which in this case is set in webpack.config
  addons.register('local_qr', api => {
    // TODO: this should probly be setup with addons.getChannel(), but I couldn't get it to work
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
}
