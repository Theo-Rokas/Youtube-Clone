import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideorRow from './VideorRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwngy2BfWvAzg844N6Mba0V7tr9Zc5FwcE2q7ZOD20w=s88-c-k-c0x00ffffff-no-rj"
                channel="TNT Records"
                verified
                subs="351K"
                noOfVideos={146}
                description="Rap Remixes" />

            <hr />

            <VideorRow
                views="40K"
                subs="251K"
                description="Rap Remix"
                timestamp="12 days ago"
                channel="TNT Records" 
                title="Lil Jon, Twista, Eminem, Tech N9ne & Yelawolf - Let's Go (2021)"
                image="https://i.ytimg.com/vi/RU6aAMlI834/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC66jLxTyAaJVjsN03H_iAmz08vKQ" />

            <VideorRow
                views="1.7M"
                subs="251K"
                description="Rap Remix"
                timestamp="4 months ago"
                channel="TNT Records" 
                title="Lil Jon & Eminem - The Power (2020)"
                image="https://i.ytimg.com/vi/q41by1UEfZo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5uefOfcqB5IeqAIjuUSgKMGbRCw" />

            <VideorRow
                views="45K"
                subs="251K"
                description="Rap Remix"
                timestamp="5 months ago"
                channel="TNT Records" 
                title="Eminem - Reasons (2020)"
                image="https://i.ytimg.com/vi/WlrZ6G7bM_k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDQ8SIZoQdX3rk3_FreCPLqpog5Mg" />

            <VideorRow
                views="109K"
                subs="251K"
                description="Rap Remix"
                timestamp="5 months ago"
                channel="TNT Records" 
                title="Lil Jon & Eminem - Fire (2020)"
                image="https://i.ytimg.com/vi/pCli3l2Qhv0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAy-d4GtsAYCbybGtv0Z64rmN74Xg" />
        </div>
    )
}

export default SearchPage
