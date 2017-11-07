import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					marginBottom: rhythm(2.5),
				}}
			>
				<img
					src={profilePic}
					alt="J. Aaron Eaton"
					style={{
						marginRight: rhythm(1 / 2),
						marginBottom: 0,
						width: rhythm(2),
						height: rhythm(2),
					}}
				/>
				<p>
					Hi! My name is <strong>J. Aaron Eaton</strong>. I help
					create amazing web experiences.{' '}
					<a href="https://twitter.com/aaroneaton">
						You should follow me on Twitter
					</a>
				</p>
			</div>
		)
	}
}

export default Bio
