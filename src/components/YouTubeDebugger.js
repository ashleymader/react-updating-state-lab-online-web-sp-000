// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{ 
    state = { 
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }}}
    
    handleBitrateChange = () => { 
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    handleResChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: { 
                    ...this.state.settings.video, 
                    resolution: '720p'
                }
            }
        })
    }

    render(){ 
        return(
            <div> 
                <button className='bitrate' onClick={this.handleBitrateChange}>Bitrate</button>
                <button className='resolution' onClick={this.handleResChange}>Resolution</button>
            </div>
            
            
        )
    }
        
    }